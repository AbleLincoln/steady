import Input from '@/app/_components/input'
import Select from '@/app/_components/select'

export default function ReservationForm() {
  return (
    <form className="grid grid-cols-4 gap-4">
      <h2 className="col-span-4 text-center text-3xl">Reserve a Session</h2>

      <Input name="firstname" label="First name" />

      <Input name="lastname" label="Last name" />

      <Input name="email" label="Email" className="col-span-2" />

      <Input name="phone" label="Phone" />

      <Input name="age" label="Age" type="number" />

      <Input name="zip" label="Zip code" />

      <Select
        name="referral"
        label="How did you hear about us"
        options={['A friend', 'Instagram']}
      />

      <Select
        label="Coaching plan"
        name="plan"
        options={['Quick Fix', 'Deeper Convo', 'Real Talk']}
        className="col-span-2"
      />

      <label htmlFor="notes" className="col-span-2 row-span-2 flex flex-col">
        <span className="mb-1 block text-sm">Notes</span>
        <textarea
          name="notes"
          id="notes"
          className="text-dark w-full flex-grow rounded-md p-2 text-lg"
        />
      </label>

      <Select
        label="What type of advice are you looking for?"
        name="advice"
        options={['I', 'dont', 'know', 'what', 'goes', 'here']}
        className="col-span-2"
      />
    </form>
  )
}
