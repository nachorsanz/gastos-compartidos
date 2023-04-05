import { convertDateFormat } from './utils';

describe('convertDateFormat', () => {
  it('should convert date format from dd/mm/yyyy to mm/dd/yyyy', () => {
    // Arrange
    const inputDate = '04/05/2023';

    // Act
    const outputDate = convertDateFormat(inputDate);

    // Assert
    expect(outputDate).toEqual('05/04/2023');
  });
});
