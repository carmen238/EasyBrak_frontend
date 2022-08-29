export const regex = {
  fiscalCode: /[a-z]{6}\d{2}[abcdehlmprst]\d{2}[a-z]\d{3}[a-z]/i,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/g,
  chacractersPassword: /(?=.{8,})/,
  upperCasePassword: /(?=.*[A-Z])/,
  underCasePassword: /(?=.*[a-z])/,
  numberPassword: /(?=.*[0-9])/,
  charactersPhoneNumber: /^[0-9]{9,10}$/,
  controlPhoneNumber: /^((00|\+)\d{2}[\. ]??)??3\d{2}[\. ]??\d{6,7}([\,\;]((00|\+)\d{2}[\. ]??)??3\d{2}[\. ]??\d{6,7})*$/,
  iban: /^(it|IT)[0-9]{2}[A-Za-z][0-9]{10}[0-9A-Za-z]{12}$/,
  allIbans: /^(?:(?:IT|SM)\d{2}[A-Z]\d{22}|CY\d{2}[A-Z]\d{23}|NL\d{2}[A-Z]{4}\d{10}|LV\d{2}[A-Z]{4}\d{13}|(?:BG|BH|GB|IE)\d{2}[A-Z]{4}\d{14}|GI\d{2}[A-Z]{4}\d{15}|RO\d{2}[A-Z]{4}\d{16}|KW\d{2}[A-Z]{4}\d{22}|MT\d{2}[A-Z]{4}\d{23}|NO\d{13}|(?:DK|FI|GL|FO)\d{16}|MK\d{17}|(?:AT|EE|KZ|LU|XK)\d{18}|(?:BA|HR|LI|CH|CR)\d{19}|(?:GE|DE|LT|ME|RS)\d{20}|IL\d{21}|(?:AD|CZ|ES|MD|SA)\d{22}|PT\d{23}|(?:BE|IS)\d{24}|(?:FR|MR|MC)\d{25}|(?:AL|DO|LB|PL)\d{26}|(?:AZ|HU)\d{27}|(?:GR|MU)\d{28})$/i,
  emailPattern: /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
};
