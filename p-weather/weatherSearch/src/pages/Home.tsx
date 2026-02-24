import { SearchBox } from "../component/SearchBox"
import { WeatherDay } from "../component/WeatherDay"
import { WeatherNow } from "../component/WeatherNow"
import { WeatherFuture } from "../component/WeatherFuture"
import { CityCollect } from "../component/CityCollect"
import { HomeLogin } from "../component/HomeLogin"
import { ThemeChange } from "../component/ThemeChange"
import { Translation } from "../component/Translation"

export const Home = () => {
    return (
        // 页面盒子
        <div className='w-full min-h-screen flex'>
            {/* 登录与收藏 */}
            <div className='flex w-1/5 justify-end py-10 max-md:hidden'>
                <div className='backgroundStyle flex flex-col w-9/50 min-w-35 whitespace-nowrap h-9/10 p-8 fixed top-10 '>
                    <HomeLogin />
                    <ThemeChange />
                    <Translation />
                    <CityCollect />
                </div>
            </div>
            {/* 具体天气 */}
            <div className='w-4/5 max-md:w-full'>
                <div className='min-w-130 flex flex-col items-center justify-evenly gap-10 p-10'>
                    <div className='w-full z-20 flex justify-center'>
                        <SearchBox />
                    </div>
                    <div className='w-full z-10 flex justify-center'>
                        <WeatherNow />
                    </div>

                    <WeatherDay />
                    <WeatherFuture />
                </div>
            </div>
        </div>
    )
}
