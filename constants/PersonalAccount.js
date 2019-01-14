/**
 * Description of PersonalAccount.
 *
 *
 * @author: Ilya Petrushenko <ilya.petrushenko@yandex.ru>
 * @since: 17.09.18 15:29
 */

export const SUGGEST_DEFAULT_VALUES = {
  id: '', // identifier
  vacancyId: 0,
  firstname: '',
  lastname: '',
  patronymic: '',
  activity: 0,
  phones: [{ id: 0, value: '(  )    -    ' }],
  emails: [{ id: 0, value: '' }],
  position: '',
  englishLevel: 0,
  citizenship: '',
  approval: '',
  education: 0,
  skype: '',
  telegram: '',
  amount: 0,
  withIT: false,
  isSave: false,
  stack: [{
    technology: '',
    experience: 1,
  }],
  aboutDesc: '',
  experienceDesc: '',
  interests: [{ id: 0, value: '' }],
  workTime: {
    full: true,
    flex: false,
    project: false,
  },
  workPlace: {
    remote: true,
    office: false,
  },
}

export const POSITION_INIT = {
  id: 0,
  title: '',
  amount: '',
  places: [],
  endDate: '',
  workTime: [],
  vacancyHref: '',
  payedRelocation: false,
  employeeCount: 0,
  probationPeriod: '',
  englishLevel: 0,
  educationLevel: 0,
  priority: 0,
  citizenship: [],
  approval: [],
}
