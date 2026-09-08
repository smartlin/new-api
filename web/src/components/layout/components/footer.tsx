/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { cn } from '@/lib/utils'

interface FooterProps {
  className?: string
}

/** Minimal public footer used by the single-screen Fonda landing page. */
export function Footer(props: FooterProps) {
  return (
    <footer
      className={cn(
        'border-border/40 bg-[#f4f5f2]/80 px-6 py-4 text-xs text-[#516171] dark:bg-[#101417]/80 dark:text-white/55',
        props.className
      )}
    >
      <div className='mx-auto max-w-7xl md:px-4 lg:px-8'>© 2026 Fonda.</div>
    </footer>
  )
}
