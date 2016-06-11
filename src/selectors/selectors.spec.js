import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return properly formatted AUTHOR data in dropdown', () =>{
      const foo = [
        {id: 'eric-goetschel', firstName: 'Eric', lastName: 'Goetschel'},
        {id: 'simore-butts', firstName: 'Simore', lastName: 'Butts'},
        {id: 'jon-jarboe', firstName: 'Jon', lastName: 'Jarboe'}
      ];
      const bar = [
        {value: 'eric-goetschel', text: 'Eric Goetschel'},
        {value: 'simore-butts', text: 'Simore Butts'},
        {value: 'jon-jarboe', text: 'Jon Jarboe'}
      ];
      expect(authorsFormattedForDropdown(foo)).toEqual(bar);
    });
  });
});
