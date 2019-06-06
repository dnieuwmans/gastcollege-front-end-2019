import { validateText } from '@/utils/validation.util';
import faker from 'faker';

describe('Validation Util', () => { 

    it('should validate text correctly - no error', () => {
        faker.locale = 'nl';

        const name = faker.name.findName();
        const expected = '';

        console.log(name);

        let error = '';

        error = validateText({}, name);

        expect(error).toBe(expected);
    });

    it('should validate text correctly - has error', () => {
        const name = 'D';
        const expected = 'Value does not match the criteria.';

        let error = '';

        error = validateText({}, name);

        expect(error).toBe(expected);
    })
});
