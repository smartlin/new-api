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
import type { CSSProperties } from 'react'

const CODE_STREAMS = [
  [
    'const route = /v1/responses',
    'model: gpt-4.1-mini',
    'status: 200 / latency: 142ms',
    'stream: true, usage: tracked',
    'authorization: bearer sk••••',
    'provider: openai / region: us-east',
  ],
  [
    'POST /v1/messages',
    'content-type: application/json',
    'model: claude-sonnet-4',
    'input_tokens: 01842',
    'output_tokens: 00416',
    'route: balanced / retry: 0',
  ],
  [
    'gateway.connect()',
    'channel: gemini',
    'policy: least-cost',
    'quota.remaining: 98.4%',
    'cache.hit: true / ttl: 60s',
    'health: all systems operational',
  ],
  [
    '{ "role": "user", "content": "..." }',
    'Fonda.API // unified access',
    'request.id: req_7f91c2',
    'fallback: enabled / timeout: 30s',
    'billing.mode: transparent',
    'response.format: openai-compatible',
  ],
]

interface StreamProps {
  id: string
  lines: string[]
  className: string
  duration: string
  delay: string
}

function CodeStream(props: StreamProps) {
  const lines = [
    ...props.lines.map((line) => ({
      id: `${props.id}-primary-${line}`,
      value: line,
    })),
    ...props.lines.map((line) => ({
      id: `${props.id}-loop-${line}`,
      value: line,
    })),
  ]

  return (
    <div
      className={`fonda-code-stream ${props.className}`}
      style={
        {
          '--fonda-stream-duration': props.duration,
          '--fonda-stream-delay': props.delay,
        } as CSSProperties
      }
    >
      <div className='fonda-code-stream__track'>
        {lines.map((line) => (
          <span key={line.id}>{line.value}</span>
        ))}
      </div>
    </div>
  )
}

export function AnimatedCodeBackground() {
  return (
    <div className='fonda-code-field' aria-hidden='true'>
      <div className='fonda-code-field__grid' />
      <div className='fonda-code-field__glow fonda-code-field__glow--blue' />
      <div className='fonda-code-field__glow fonda-code-field__glow--orange' />
      <div className='fonda-code-field__streams'>
        {CODE_STREAMS.map((lines, index) => (
          <CodeStream
            key={`stream-${index + 1}`}
            id={`stream-${index + 1}`}
            lines={lines}
            className={`fonda-code-stream--${index + 1}`}
            duration={`${18 + index * 4}s`}
            delay={`${index * -3}s`}
          />
        ))}
      </div>
      <div className='fonda-code-field__veil' />
    </div>
  )
}
