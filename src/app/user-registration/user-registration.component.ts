import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { DataServiceService } from '../common/data-service.service';
import { Router } from '@angular/router';
import { MatChipInputEvent } from '@angular/material/chips';
export interface Tag {
  name: string;
}
export interface State {
  value: string;
  viewValue: string;
}
export interface Country {
  name: string,
    code: string
}
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  public breakpoint: number;
  public addUserForm: FormGroup;
  wasFormChanged: boolean = false;
  imageUrl: any = "https://previews.123rf.com/images/mialima/mialima1603/mialima160300025/55096766-male-user-icon-isolated-on-a-white-background-account-avatar-for-web-user-profile-picture-unknown-ma.jpg";
  editFile: boolean = true;
  removeUpload: boolean = false;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  Tags: any = [];
  ageValue: number = 20;
  allcountry: Country[] = [{
      name: 'Afghanistan',
      code: 'AF'
    },
    {
      name: 'Åland Islands',
      code: 'AX'
    },
    {
      name: 'Albania',
      code: 'AL'
    },
    {
      name: 'Algeria',
      code: 'DZ'
    },
    {
      name: 'American Samoa',
      code: 'AS'
    },
    {
      name: 'AndorrA',
      code: 'AD'
    },
    {
      name: 'Angola',
      code: 'AO'
    },
    {
      name: 'Anguilla',
      code: 'AI'
    },
    {
      name: 'Antarctica',
      code: 'AQ'
    },
    {
      name: 'Antigua and Barbuda',
      code: 'AG'
    },
    {
      name: 'Argentina',
      code: 'AR'
    },
    {
      name: 'Armenia',
      code: 'AM'
    },
    {
      name: 'Aruba',
      code: 'AW'
    },
    {
      name: 'Australia',
      code: 'AU'
    },
    {
      name: 'Austria',
      code: 'AT'
    },
    {
      name: 'Azerbaijan',
      code: 'AZ'
    },
    {
      name: 'Bahamas',
      code: 'BS'
    },
    {
      name: 'Bahrain',
      code: 'BH'
    },
    {
      name: 'Bangladesh',
      code: 'BD'
    },
    {
      name: 'Barbados',
      code: 'BB'
    },
    {
      name: 'Belarus',
      code: 'BY'
    },
    {
      name: 'Belgium',
      code: 'BE'
    },
    {
      name: 'Belize',
      code: 'BZ'
    },
    {
      name: 'Benin',
      code: 'BJ'
    },
    {
      name: 'Bermuda',
      code: 'BM'
    },
    {
      name: 'Bhutan',
      code: 'BT'
    },
    {
      name: 'Bolivia',
      code: 'BO'
    },
    {
      name: 'Bosnia and Herzegovina',
      code: 'BA'
    },
    {
      name: 'Botswana',
      code: 'BW'
    },
    {
      name: 'Bouvet Island',
      code: 'BV'
    },
    {
      name: 'Brazil',
      code: 'BR'
    },
    {
      name: 'British Indian Ocean Territory',
      code: 'IO'
    },
    {
      name: 'Brunei Darussalam',
      code: 'BN'
    },
    {
      name: 'Bulgaria',
      code: 'BG'
    },
    {
      name: 'Burkina Faso',
      code: 'BF'
    },
    {
      name: 'Burundi',
      code: 'BI'
    },
    {
      name: 'Cambodia',
      code: 'KH'
    },
    {
      name: 'Cameroon',
      code: 'CM'
    },
    {
      name: 'Canada',
      code: 'CA'
    },
    {
      name: 'Cape Verde',
      code: 'CV'
    },
    {
      name: 'Cayman Islands',
      code: 'KY'
    },
    {
      name: 'Central African Republic',
      code: 'CF'
    },
    {
      name: 'Chad',
      code: 'TD'
    },
    {
      name: 'Chile',
      code: 'CL'
    },
    {
      name: 'China',
      code: 'CN'
    },
    {
      name: 'Christmas Island',
      code: 'CX'
    },
    {
      name: 'Cocos (Keeling) Islands',
      code: 'CC'
    },
    {
      name: 'Colombia',
      code: 'CO'
    },
    {
      name: 'Comoros',
      code: 'KM'
    },
    {
      name: 'Congo',
      code: 'CG'
    },
    {
      name: 'Congo, The Democratic Republic of the',
      code: 'CD'
    },
    {
      name: 'Cook Islands',
      code: 'CK'
    },
    {
      name: 'Costa Rica',
      code: 'CR'
    },
    {
      name: 'Cote D\'Ivoire',
      code: 'CI'
    },
    {
      name: 'Croatia',
      code: 'HR'
    },
    {
      name: 'Cuba',
      code: 'CU'
    },
    {
      name: 'Cyprus',
      code: 'CY'
    },
    {
      name: 'Czech Republic',
      code: 'CZ'
    },
    {
      name: 'Denmark',
      code: 'DK'
    },
    {
      name: 'Djibouti',
      code: 'DJ'
    },
    {
      name: 'Dominica',
      code: 'DM'
    },
    {
      name: 'Dominican Republic',
      code: 'DO'
    },
    {
      name: 'Ecuador',
      code: 'EC'
    },
    {
      name: 'Egypt',
      code: 'EG'
    },
    {
      name: 'El Salvador',
      code: 'SV'
    },
    {
      name: 'Equatorial Guinea',
      code: 'GQ'
    },
    {
      name: 'Eritrea',
      code: 'ER'
    },
    {
      name: 'Estonia',
      code: 'EE'
    },
    {
      name: 'Ethiopia',
      code: 'ET'
    },
    {
      name: 'Falkland Islands (Malvinas)',
      code: 'FK'
    },
    {
      name: 'Faroe Islands',
      code: 'FO'
    },
    {
      name: 'Fiji',
      code: 'FJ'
    },
    {
      name: 'Finland',
      code: 'FI'
    },
    {
      name: 'France',
      code: 'FR'
    },
    {
      name: 'French Guiana',
      code: 'GF'
    },
    {
      name: 'French Polynesia',
      code: 'PF'
    },
    {
      name: 'French Southern Territories',
      code: 'TF'
    },
    {
      name: 'Gabon',
      code: 'GA'
    },
    {
      name: 'Gambia',
      code: 'GM'
    },
    {
      name: 'Georgia',
      code: 'GE'
    },
    {
      name: 'Germany',
      code: 'DE'
    },
    {
      name: 'Ghana',
      code: 'GH'
    },
    {
      name: 'Gibraltar',
      code: 'GI'
    },
    {
      name: 'Greece',
      code: 'GR'
    },
    {
      name: 'Greenland',
      code: 'GL'
    },
    {
      name: 'Grenada',
      code: 'GD'
    },
    {
      name: 'Guadeloupe',
      code: 'GP'
    },
    {
      name: 'Guam',
      code: 'GU'
    },
    {
      name: 'Guatemala',
      code: 'GT'
    },
    {
      name: 'Guernsey',
      code: 'GG'
    },
    {
      name: 'Guinea',
      code: 'GN'
    },
    {
      name: 'Guinea-Bissau',
      code: 'GW'
    },
    {
      name: 'Guyana',
      code: 'GY'
    },
    {
      name: 'Haiti',
      code: 'HT'
    },
    {
      name: 'Heard Island and Mcdonald Islands',
      code: 'HM'
    },
    {
      name: 'Holy See (Vatican City State)',
      code: 'VA'
    },
    {
      name: 'Honduras',
      code: 'HN'
    },
    {
      name: 'Hong Kong',
      code: 'HK'
    },
    {
      name: 'Hungary',
      code: 'HU'
    },
    {
      name: 'Iceland',
      code: 'IS'
    },
    {
      name: 'India',
      code: 'IN'
    },
    {
      name: 'Indonesia',
      code: 'ID'
    },
    {
      name: 'Iran, Islamic Republic Of',
      code: 'IR'
    },
    {
      name: 'Iraq',
      code: 'IQ'
    },
    {
      name: 'Ireland',
      code: 'IE'
    },
    {
      name: 'Isle of Man',
      code: 'IM'
    },
    {
      name: 'Israel',
      code: 'IL'
    },
    {
      name: 'Italy',
      code: 'IT'
    },
    {
      name: 'Jamaica',
      code: 'JM'
    },
    {
      name: 'Japan',
      code: 'JP'
    },
    {
      name: 'Jersey',
      code: 'JE'
    },
    {
      name: 'Jordan',
      code: 'JO'
    },
    {
      name: 'Kazakhstan',
      code: 'KZ'
    },
    {
      name: 'Kenya',
      code: 'KE'
    },
    {
      name: 'Kiribati',
      code: 'KI'
    },
    {
      name: 'Korea, Democratic People\'S Republic of',
      code: 'KP'
    },
    {
      name: 'Korea, Republic of',
      code: 'KR'
    },
    {
      name: 'Kuwait',
      code: 'KW'
    },
    {
      name: 'Kyrgyzstan',
      code: 'KG'
    },
    {
      name: 'Lao People\'S Democratic Republic',
      code: 'LA'
    },
    {
      name: 'Latvia',
      code: 'LV'
    },
    {
      name: 'Lebanon',
      code: 'LB'
    },
    {
      name: 'Lesotho',
      code: 'LS'
    },
    {
      name: 'Liberia',
      code: 'LR'
    },
    {
      name: 'Libyan Arab Jamahiriya',
      code: 'LY'
    },
    {
      name: 'Liechtenstein',
      code: 'LI'
    },
    {
      name: 'Lithuania',
      code: 'LT'
    },
    {
      name: 'Luxembourg',
      code: 'LU'
    },
    {
      name: 'Macao',
      code: 'MO'
    },
    {
      name: 'Macedonia, The Former Yugoslav Republic of',
      code: 'MK'
    },
    {
      name: 'Madagascar',
      code: 'MG'
    },
    {
      name: 'Malawi',
      code: 'MW'
    },
    {
      name: 'Malaysia',
      code: 'MY'
    },
    {
      name: 'Maldives',
      code: 'MV'
    },
    {
      name: 'Mali',
      code: 'ML'
    },
    {
      name: 'Malta',
      code: 'MT'
    },
    {
      name: 'Marshall Islands',
      code: 'MH'
    },
    {
      name: 'Martinique',
      code: 'MQ'
    },
    {
      name: 'Mauritania',
      code: 'MR'
    },
    {
      name: 'Mauritius',
      code: 'MU'
    },
    {
      name: 'Mayotte',
      code: 'YT'
    },
    {
      name: 'Mexico',
      code: 'MX'
    },
    {
      name: 'Micronesia, Federated States of',
      code: 'FM'
    },
    {
      name: 'Moldova, Republic of',
      code: 'MD'
    },
    {
      name: 'Monaco',
      code: 'MC'
    },
    {
      name: 'Mongolia',
      code: 'MN'
    },
    {
      name: 'Montserrat',
      code: 'MS'
    },
    {
      name: 'Morocco',
      code: 'MA'
    },
    {
      name: 'Mozambique',
      code: 'MZ'
    },
    {
      name: 'Myanmar',
      code: 'MM'
    },
    {
      name: 'Namibia',
      code: 'NA'
    },
    {
      name: 'Nauru',
      code: 'NR'
    },
    {
      name: 'Nepal',
      code: 'NP'
    },
    {
      name: 'Netherlands',
      code: 'NL'
    },
    {
      name: 'Netherlands Antilles',
      code: 'AN'
    },
    {
      name: 'New Caledonia',
      code: 'NC'
    },
    {
      name: 'New Zealand',
      code: 'NZ'
    },
    {
      name: 'Nicaragua',
      code: 'NI'
    },
    {
      name: 'Niger',
      code: 'NE'
    },
    {
      name: 'Nigeria',
      code: 'NG'
    },
    {
      name: 'Niue',
      code: 'NU'
    },
    {
      name: 'Norfolk Island',
      code: 'NF'
    },
    {
      name: 'Northern Mariana Islands',
      code: 'MP'
    },
    {
      name: 'Norway',
      code: 'NO'
    },
    {
      name: 'Oman',
      code: 'OM'
    },
    {
      name: 'Pakistan',
      code: 'PK'
    },
    {
      name: 'Palau',
      code: 'PW'
    },
    {
      name: 'Palestinian Territory, Occupied',
      code: 'PS'
    },
    {
      name: 'Panama',
      code: 'PA'
    },
    {
      name: 'Papua New Guinea',
      code: 'PG'
    },
    {
      name: 'Paraguay',
      code: 'PY'
    },
    {
      name: 'Peru',
      code: 'PE'
    },
    {
      name: 'Philippines',
      code: 'PH'
    },
    {
      name: 'Pitcairn',
      code: 'PN'
    },
    {
      name: 'Poland',
      code: 'PL'
    },
    {
      name: 'Portugal',
      code: 'PT'
    },
    {
      name: 'Puerto Rico',
      code: 'PR'
    },
    {
      name: 'Qatar',
      code: 'QA'
    },
    {
      name: 'Reunion',
      code: 'RE'
    },
    {
      name: 'Romania',
      code: 'RO'
    },
    {
      name: 'Russian Federation',
      code: 'RU'
    },
    {
      name: 'RWANDA',
      code: 'RW'
    },
    {
      name: 'Saint Helena',
      code: 'SH'
    },
    {
      name: 'Saint Kitts and Nevis',
      code: 'KN'
    },
    {
      name: 'Saint Lucia',
      code: 'LC'
    },
    {
      name: 'Saint Pierre and Miquelon',
      code: 'PM'
    },
    {
      name: 'Saint Vincent and the Grenadines',
      code: 'VC'
    },
    {
      name: 'Samoa',
      code: 'WS'
    },
    {
      name: 'San Marino',
      code: 'SM'
    },
    {
      name: 'Sao Tome and Principe',
      code: 'ST'
    },
    {
      name: 'Saudi Arabia',
      code: 'SA'
    },
    {
      name: 'Senegal',
      code: 'SN'
    },
    {
      name: 'Serbia and Montenegro',
      code: 'CS'
    },
    {
      name: 'Seychelles',
      code: 'SC'
    },
    {
      name: 'Sierra Leone',
      code: 'SL'
    },
    {
      name: 'Singapore',
      code: 'SG'
    },
    {
      name: 'Slovakia',
      code: 'SK'
    },
    {
      name: 'Slovenia',
      code: 'SI'
    },
    {
      name: 'Solomon Islands',
      code: 'SB'
    },
    {
      name: 'Somalia',
      code: 'SO'
    },
    {
      name: 'South Africa',
      code: 'ZA'
    },
    {
      name: 'South Georgia and the South Sandwich Islands',
      code: 'GS'
    },
    {
      name: 'Spain',
      code: 'ES'
    },
    {
      name: 'Sri Lanka',
      code: 'LK'
    },
    {
      name: 'Sudan',
      code: 'SD'
    },
    {
      name: 'Suriname',
      code: 'SR'
    },
    {
      name: 'Svalbard and Jan Mayen',
      code: 'SJ'
    },
    {
      name: 'Swaziland',
      code: 'SZ'
    },
    {
      name: 'Sweden',
      code: 'SE'
    },
    {
      name: 'Switzerland',
      code: 'CH'
    },
    {
      name: 'Syrian Arab Republic',
      code: 'SY'
    },
    {
      name: 'Taiwan, Province of China',
      code: 'TW'
    },
    {
      name: 'Tajikistan',
      code: 'TJ'
    },
    {
      name: 'Tanzania, United Republic of',
      code: 'TZ'
    },
    {
      name: 'Thailand',
      code: 'TH'
    },
    {
      name: 'Timor-Leste',
      code: 'TL'
    },
    {
      name: 'Togo',
      code: 'TG'
    },
    {
      name: 'Tokelau',
      code: 'TK'
    },
    {
      name: 'Tonga',
      code: 'TO'
    },
    {
      name: 'Trinidad and Tobago',
      code: 'TT'
    },
    {
      name: 'Tunisia',
      code: 'TN'
    },
    {
      name: 'Turkey',
      code: 'TR'
    },
    {
      name: 'Turkmenistan',
      code: 'TM'
    },
    {
      name: 'Turks and Caicos Islands',
      code: 'TC'
    },
    {
      name: 'Tuvalu',
      code: 'TV'
    },
    {
      name: 'Uganda',
      code: 'UG'
    },
    {
      name: 'Ukraine',
      code: 'UA'
    },
    {
      name: 'United Arab Emirates',
      code: 'AE'
    },
    {
      name: 'United Kingdom',
      code: 'GB'
    },
    {
      name: 'United States',
      code: 'US'
    },
    {
      name: 'United States Minor Outlying Islands',
      code: 'UM'
    },
    {
      name: 'Uruguay',
      code: 'UY'
    },
    {
      name: 'Uzbekistan',
      code: 'UZ'
    },
    {
      name: 'Vanuatu',
      code: 'VU'
    },
    {
      name: 'Venezuela',
      code: 'VE'
    },
    {
      name: 'Viet Nam',
      code: 'VN'
    },
    {
      name: 'Virgin Islands, British',
      code: 'VG'
    },
    {
      name: 'Virgin Islands, U.S.',
      code: 'VI'
    },
    {
      name: 'Wallis and Futuna',
      code: 'WF'
    },
    {
      name: 'Western Sahara',
      code: 'EH'
    },
    {
      name: 'Yemen',
      code: 'YE'
    },
    {
      name: 'Zambia',
      code: 'ZM'
    },
    {
      name: 'Zimbabwe',
      code: 'ZW'
    }
  ]
  allstate: State[] = [{
      value: "AN",
      viewValue: "Andaman and Nicobar Islands"
    },
    {
      value: "AP",
      viewValue: "Andhra Pradesh"
    },
    {
      value: "AR",
      viewValue: "Arunachal Pradesh"
    },
    {
      value: "AS",
      viewValue: "Assam"
    },
    {
      value: "BR",
      viewValue: "Bihar"
    },
    {
      value: "CG",
      viewValue: "Chandigarh"
    },
    {
      value: "CH",
      viewValue: "Chhattisgarh"
    },
    {
      value: "DH",
      viewValue: "Dadra and Nagar Haveli"
    },
    {
      value: "DD",
      viewValue: "Daman and Diu"
    },
    {
      value: "DL",
      viewValue: "Delhi"
    },
    {
      value: "GA",
      viewValue: "Goa"
    },
    {
      value: "GJ",
      viewValue: "Gujarat"
    },
    {
      value: "HR",
      viewValue: "Haryana"
    },
    {
      value: "HP",
      viewValue: "Himachal Pradesh"
    },
    {
      value: "JK",
      viewValue: "Jammu and Kashmir"
    },
    {
      value: "JH",
      viewValue: "Jharkhand"
    },
    {
      value: "KA",
      viewValue: "Karnataka"
    },
    {
      value: "KL",
      viewValue: "Kerala"
    },
    {
      value: "LD",
      viewValue: "Lakshadweep"
    },
    {
      value: "MP",
      viewValue: "Madhya Pradesh"
    },
    {
      value: "MH",
      viewValue: "Maharashtra"
    },
    {
      value: "MN",
      viewValue: "Manipur"
    },
    {
      value: "ML",
      viewValue: "Meghalaya"
    },
    {
      value: "MZ",
      viewValue: "Mizoram"
    },
    {
      value: "NL",
      viewValue: "Nagaland"
    },
    {
      value: "OR",
      viewValue: "Odisha"
    },
    {
      value: "PY",
      viewValue: "Puducherry"
    },
    {
      value: "PB",
      viewValue: "Punjab"
    },
    {
      value: "RJ",
      viewValue: "Rajasthan"
    },
    {
      value: "SK",
      viewValue: "Sikkim"
    },
    {
      value: "TN",
      viewValue: "Tamil Nadu"
    },
    {
      value: "TS",
      viewValue: "Telangana"
    },
    {
      value: "TR",
      viewValue: "Tripura"
    },
    {
      value: "UK",
      viewValue: "Uttar Pradesh"
    },
    {
      value: "UP",
      viewValue: "Uttarakhand"
    },
    {
      value: "WB",
      viewValue: "West Bengal"
    }
  ];
  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef, public dialog: MatDialog, private dataService: DataServiceService, public route: Router) {}

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      file: [null],
      firstname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      lastname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      email: ['', [Validators.required, Validators.email]],
      phonenumber: ['', []],
      age: [this.ageValue, []],
      state: ['', []],
      country: ['', []],
      address: ['', []],
      tags: [this.Tags, []],
    });
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2;
  }

  formatLabel(value: number) {
    this.ageValue = value;
    return value;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.Tags.push({
        name: value.trim()
      });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(Tag: Tag): void {
    const index = this.Tags.indexOf(Tag);

    if (index >= 0) {
      this.Tags.splice(index, 1);
    }
  }

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.addUserForm.patchValue({
          file: reader.result
        });
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }
  }

  formChanged(): void {
    this.wasFormChanged = true;
    this.dataService.setNewUserInfo(this.addUserForm.value);
    this.dialog.closeAll();
    this.route.navigate(['/UserProfile']);
  }

  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

  openDialog(): void {
    console.log(this.wasFormChanged);
    /* if (this.addUserForm.dirty) {
      const dialogRef = this.dialog.open(UserProfileComponent, {
        width: '340px',
      });
    } else { */
    this.dialog.closeAll();
    //}
  }

}
