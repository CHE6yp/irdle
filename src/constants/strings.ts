export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Бæдæйнаг!', 'Тынг хорз!']
export const GAME_COPIED_MESSAGE = 'Хъаст къопигонд у'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Фылдæр дамгъæта хъæуы равзарын'
export const WORD_NOT_FOUND_MESSAGE = 'Дзырд нæ фæзынди'
export const HARD_MODE_ALERT_MESSAGE =
  'Вазыгджын режим æрмæст хъазты райдайæны гæнæн ис!'
export const HARD_MODE_DESCRIPTION =
  'Аллы бæрæг дамгъæ хъуамæ уа иннæ фæлварæдты'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Цæмæй хуызтæ хуыздæр уынай'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Раст дзырд уыди "${solution}"`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `${guess} хъуамæ уа ${position} бынаты`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `${letter} хъуамæ уа дзырды`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Статистикæ'
export const GUESS_DISTRIBUTION_TEXT = 'Фæлварæдты райуæрст'
export const NEW_WORD_TEXT = 'Ног дзырд'
export const SHARE_TEXT = 'Арвитын'
export const SHARE_FAILURE_TEXT =
  'Unable to share the results. This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.'
export const MIGRATE_BUTTON_TEXT = 'Бынат аивын'
export const MIGRATE_DESCRIPTION_TEXT =
  'Ам бавнал, цæмæн дæ статистикæ ног гарзæгмæ арвитай.'
export const TOTAL_TRIES_TEXT = 'Æдæппæт фæлварæны'
export const SUCCESS_RATE_TEXT = 'Уæлахизон бæрц'
export const CURRENT_STREAK_TEXT = 'Уæлахизон уадздзаг'
export const BEST_STREAK_TEXT = 'Иуыл хуыздæр уæлахизон уадздзаг'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "You are using an embedded browser and may experience problems sharing or saving your results. We encourage you rather to use your device's default browser."

export const DATEPICKER_TITLE = 'Choose a past date'
export const DATEPICKER_CHOOSE_TEXT = 'Choose'
export const DATEPICKER_TODAY_TEXT = 'абон'
export const ARCHIVE_GAMEDATE_TEXT = 'Game date'
