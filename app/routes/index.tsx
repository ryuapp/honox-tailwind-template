import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'

export default createRoute((c) => {
  const name = c.req.query('name') ?? 'Hono'
  return c.render(
    <div>
      <h1>Hello, <span class="text-red-600">{name}</span>!</h1>
      <Counter />
    </div>,
    { title: name }
  )
})
