import Notes from './notes'
import Chat from './chat'

export default async function Admin() {
  return (
    <div className="flex grow">
      <Chat />

      <Notes />
    </div>
  )
}
