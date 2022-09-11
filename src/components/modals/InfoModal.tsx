import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Хъазты фæткытæ" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Базон ныхас. Ис дæм 6 фæлварæны. Аллы фæлварæны фæстæ дæр квадраты хуыз ивдзæн æмæ æмондзæн, цас хæстæг дæ раст дзуаппмæ.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="Ф"
          status="correct"
        />
        <Cell value="И" isCompleted={true} />
        <Cell value="Д" isCompleted={true} />
        <Cell value="Ы" isCompleted={true} />
        <Cell value="Н" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Дамгъæ <b><i>Ф</i></b> ныхасы ис, æмæ лæууы йæ бынаты.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="Г" isCompleted={true} />
        <Cell value="О" isCompleted={true} />
        <Cell value="Г" isCompleted={true} />
        <Cell value="Ы" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="З"
          status="present"
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Дамгъæ <b><i>З</i></b> ныхасы ис, фæлæ йæ бынаты нæ лæууы.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="Æ" isCompleted={true} />
        <Cell value="М" isCompleted={true} />
        <Cell value="Б" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="А" status="absent" />
        <Cell value="Л" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Дамгъæ <b><i>А</i></b> ныхасы æппындæр нæй.
      </p>

      {/*<p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="font-bold underline"
        >
          check out the code here
        </a>{' '}
      </p>*/}
    </BaseModal>
  )
}
