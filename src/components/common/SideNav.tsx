import {HomeIcon, BookOpenIcon, PencilAltIcon, CloudIcon} from '@heroicons/react/solid'
import Image from 'next/image'
import logo from "../../../public/logo.svg"

function SideNav() {
  return (
    <div className="flex flex-no-wrap">
      {/* Sidebar starts */}
        <div className="w-64 absolute sm:relative shadow md:h-full flex-col justify-between hidden sm:flex side-nav-global-bg">
          <div className="px-8">
            {/* Logo */}
            <div className="h-16 w-full flex items-center">
               <Image src={logo} width={144} height={30}/>
            </div>
            <ul className="mt-12">
              <li className="flex w-full justify-between text-gray-500 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  {/* Home Link */}
                  <HomeIcon width={18} height={18}/>
                  <span className="text-sm ml-2">Home</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-500 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  {/* Books Link */}
                  <BookOpenIcon width={18} height={18}/>
                  <span className="text-sm ml-2">Books</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-500 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  {/* Author Link */}
                  <PencilAltIcon width={18} height={18}/>
                  <span className="text-sm ml-2">Authors</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-500 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  {/* All Instances Link */}
                  <CloudIcon width={18} height={18}/>
                  <span className="text-sm ml-2">All Instances</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default SideNav