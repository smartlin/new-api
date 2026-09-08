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
import { Link } from '@tanstack/react-router'
import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'

import { AnimatedCodeBackground } from '../animated-code-background'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

export function Hero(props: HeroProps) {
  const { t } = useTranslation()

  return (
    <section
      className='fonda-hero relative isolate min-h-svh overflow-hidden bg-[#f4f5f2] text-[#17202b] dark:bg-[#101417] dark:text-white'
      aria-labelledby='fonda-hero-title'
    >
      <AnimatedCodeBackground />

      <div className='relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-6 pt-24 pb-10 md:px-10 md:pt-28 md:pb-12 lg:px-14'>
        <div className='grid -translate-y-4 items-center gap-14 md:-translate-y-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24'>
          <div className='max-w-3xl'>
            <h1
              id='fonda-hero-title'
              className='fonda-wordmark text-[clamp(3.25rem,7.8vw,7.5rem)] leading-[0.86] font-semibold tracking-[-0.065em] whitespace-nowrap text-[#17202b] select-none dark:text-white'
              aria-label='Fonda API'
            >
              <span className='fonda-wordmark-letter'>F</span>
              <span className='fonda-wordmark-letter'>o</span>
              <span className='fonda-wordmark-letter'>n</span>
              <span className='fonda-wordmark-letter'>d</span>
              <span className='fonda-wordmark-letter'>a</span>
              <span className='fonda-wordmark-space' aria-hidden='true'>
                &nbsp;
              </span>
              <span className='fonda-wordmark-letter'>A</span>
              <span className='fonda-wordmark-letter'>P</span>
              <span className='fonda-wordmark-letter'>I</span>
            </h1>
            <div className='mt-10 flex items-start gap-4 md:gap-6'>
              <ArrowDownRight
                className='mt-2 size-8 shrink-0 text-[#ef6c43] md:size-11'
                strokeWidth={1.5}
              />
              <p className='max-w-xl text-lg leading-[1.45] font-medium text-pretty text-[#394a5b] md:text-2xl dark:text-white/70'>
                {t(
                  'Access a vast selection of models via a standard, unified API protocol. Power AI applications, manage digital assets, and connect the Future.'
                )}
              </p>
            </div>
          </div>

          <div className='max-w-md justify-self-start lg:justify-self-end'>
            <span
              aria-hidden='true'
              className='mb-7 block h-px w-16 bg-[#ef6c43]'
            />
            <h2 className='max-w-md text-3xl leading-[1.04] font-semibold tracking-[-0.03em] text-pretty md:text-[2.75rem]'>
              {t('Unified API Gateway for')}
              <span className='mt-2 block text-[#3d8bd1]'>
                {t('Vast Range of AI Models')}
              </span>
            </h2>
            <div className='mt-8 flex flex-wrap items-center gap-3'>
              {props.isAuthenticated ? (
                <Button
                  className='group h-12 rounded-none bg-[#17202b] px-5 text-sm font-semibold text-white shadow-[5px_5px_0_#ef6c43] transition-[background-color,transform] hover:bg-[#263442] active:translate-x-0.5 active:translate-y-0.5 dark:bg-white dark:text-[#17202b] dark:hover:bg-white/90'
                  render={<Link to='/dashboard' />}
                >
                  {t('Go to Dashboard')}
                  <ArrowRight className='ml-2 size-4 transition-transform group-hover:translate-x-1' />
                </Button>
              ) : (
                <Button
                  className='group h-12 rounded-none bg-[#17202b] px-5 text-sm font-semibold text-white shadow-[5px_5px_0_#ef6c43] transition-[background-color,transform] hover:bg-[#263442] active:translate-x-0.5 active:translate-y-0.5 dark:bg-white dark:text-[#17202b] dark:hover:bg-white/90'
                  render={<Link to='/sign-up' />}
                >
                  {t('Get Started')}
                  <ArrowRight className='ml-2 size-4 transition-transform group-hover:translate-x-1' />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
