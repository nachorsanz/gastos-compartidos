/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom/extend-expect';
import { useLocalStorage } from './use-locale-storage';
import { renderHook, act } from '@testing-library/react';

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize data to null', () => {
    const { result } = renderHook(() => useLocalStorage('testKey'));
    expect(result.current[0]).toBe('');
  });

  it('should set data to localStorage', () => {
    
    const { result } = renderHook(() => 
    useLocalStorage('testKey'));
    const [, setData] = result.current;
    if (typeof setData === 'function') {
        act(() => setData('testValue'));
      }
    expect(localStorage.getItem('testKey')).toBe('"testValue"');
    expect(result.current[0]).toBe('testValue');
  });

  it('should retrieve data from localStorage', () => {
    localStorage.setItem('testKey', JSON.stringify('testValue'));
    const { result } = renderHook(() => useLocalStorage('testKey'));
    expect(result.current[0]).toBe('testValue');
  });

  it('should update data in localStorage', () => {
    localStorage.setItem('testKey', JSON.stringify('oldValue'));
    const { result } = renderHook(() => useLocalStorage('testKey'));
    const [, setData] = result.current;
    if (typeof setData === 'function') {
        act(() => setData('newValue'));
      }
    expect(localStorage.getItem('testKey')).toBe('"newValue"');
    expect(result.current[0]).toBe('newValue');
  });
});
