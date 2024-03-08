import { Type as T } from '@sinclair/typebox';

export const database_index_schema = T.Object({
	menu: T.Union([T.Literal('1'), T.Literal('2')])
})

export const database_index = {
  "menu": [
    "1",
    "2"
  ]
} as const