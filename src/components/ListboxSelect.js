// src/components/ListboxSelect.js
import { Fragment } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

export default function ListboxSelect({ label, value, options, onChange, className = '' }) {
  return (
    <div className={`text-left w-full ${className}`}>
      {label && <label className="block mb-1 text-white font-semibold">{label}</label>}

      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <ListboxButton className="w-full cursor-pointer bg-white/10 text-white p-2 pr-10 rounded border border-white/20 text-left focus:outline-none focus:ring-2 focus:ring-cyan-400">
            <span className="block truncate">{value}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown className="w-4 h-4 text-white opacity-70" />
            </span>
          </ListboxButton>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 ring-1 ring-white/10 text-white shadow-xl z-50">
              {options.map((opt, i) => (
                <ListboxOption
                  key={i}
                  value={opt}
                  className={({ active }) =>
                    `cursor-pointer select-none px-4 py-2 ${
                      active ? 'bg-cyan-600 text-white' : 'text-gray-200'
                    }`
                  }
                >
                  {opt}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
