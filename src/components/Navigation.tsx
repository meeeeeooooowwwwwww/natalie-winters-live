'use client'

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '/about', current: false },
  {
    name: 'Videos',
    current: false,
    items: [
      { name: 'Latest Videos', href: '/videos' },
      { name: 'War Room', href: 'https://warroom.org', external: true },
      { name: 'White House Briefings', href: 'https://www.whitehouse.gov/briefing-room/', external: true },
    ],
  },
  {
    name: 'News',
    current: false,
    items: [
      { name: 'Latest News', href: '/news' },
      { name: 'White House News', href: 'https://www.whitehouse.gov/news/', external: true },
      { name: 'Epoch Times', href: 'https://www.theepochtimes.com', external: true },
    ],
  },
  {
    name: 'Latest Posts',
    current: false,
    items: [
      { name: 'Social Media', href: '/latest-posts' },
      { name: 'Twitter/X', href: 'https://x.com/nataliegwinters', external: true },
    ],
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  const pathname = usePathname()

  // Update current state based on pathname
  const updatedNavigation = navigation.map(item => {
    if (item.items) {
      return {
        ...item,
        current: item.items.some(subItem => subItem.href === pathname)
      }
    }
    return {
      ...item,
      current: item.href === pathname
    }
  })

  return (
    <Disclosure as="nav" className="fixed w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link href="/" className="text-xl font-bold">
                  Natalie G. Winters
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {updatedNavigation.map((item) => (
                    <div key={item.name}>
                      {item.items ? (
                        <Menu as="div" className="relative inline-block text-left">
                          <Menu.Button className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}>
                            {item.name}
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1">
                                {item.items.map((subItem) => (
                                  <Menu.Item key={subItem.name}>
                                    {({ active }) => (
                                      <Link
                                        href={subItem.href}
                                        target={subItem.external ? '_blank' : undefined}
                                        rel={subItem.external ? 'noopener noreferrer' : undefined}
                                        className={classNames(
                                          active ? 'bg-gray-700 text-white' : 'text-gray-300',
                                          subItem.href === pathname ? 'bg-gray-700 text-white' : '',
                                          'block px-4 py-2 text-sm'
                                        )}
                                      >
                                        {subItem.name}
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))}
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      ) : (
                        <Link
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-sm font-medium'
                          )}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {updatedNavigation.map((item) => (
                <div key={item.name}>
                  {item.items ? (
                    <div className="space-y-1">
                      <Disclosure.Button
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block w-full px-3 py-2 text-left text-base font-medium'
                        )}
                      >
                        {item.name}
                      </Disclosure.Button>
                      <Disclosure.Panel className="space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            target={subItem.external ? '_blank' : undefined}
                            rel={subItem.external ? 'noopener noreferrer' : undefined}
                            className={classNames(
                              'block pl-6 pr-4 py-2 text-base font-medium',
                              subItem.href === pathname
                                ? 'bg-gray-700 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                            )}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
} 