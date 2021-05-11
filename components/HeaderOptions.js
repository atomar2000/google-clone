import HeaderOption from './HeaderOption'
import {DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon} from '@heroicons/react/outline'
function HeaderOptions() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b"> 
            <div className="flex space-x-6">
                <HeaderOption Icon={SearchIcon} title="All" selected/>
                <HeaderOption Icon={PhotographIcon} title="images" selected/>
                <HeaderOption Icon={PlayIcon} title="videos" selected/>
                <HeaderOption Icon={NewspaperIcon} title="news" selected/>
                <HeaderOption Icon={MapIcon} title="maps" selected/>
                <HeaderOption Icon={DotsVerticalIcon} title="more" selected/>
            </div>


            <div className="flex space-x-4 ml-20 pr-3">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
