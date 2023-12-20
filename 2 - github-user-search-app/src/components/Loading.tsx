import LoadingIcons from "react-loading-icons"
import { useSelector } from "react-redux"
import { Theme } from "../redux/feature/themeSlice"
export default function Loading() {
const theme = useSelector((state: Theme) => state.theme.isDarkMode)

  return (
    <div className='z-50 dark:text-white  flex justify-center h-[340px] items-center'>
    <div className='animate-spin'>
        <LoadingIcons.Puff stroke={theme ? "white" : "black"}  />
    </div>
</div>
  )
}
