import Input from '@/app/_components/input'
import Select from '@/app/_components/select'

export default function ReservationForm() {
  return (
    <form className="grid grid-cols-3 gap-4 md:grid-cols-4">
      <h2 className="col-span-3 text-center text-3xl md:col-span-4">
        Reserve a Session
      </h2>

      <Input name="firstname" label="First name" />

      <Input name="lastname" label="Last name" />

      <Input name="email" label="Email" className="md:col-span-2" />

      <Input name="phone" label="Phone" className="mobile-only:col-span-2" />

      <Input name="age" label="Age" type="number" className="!col-span-1" />

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
        className="md:col-span-2"
      />

      <label
        htmlFor="notes"
        className="col-span-full row-span-2 flex flex-col md:col-span-2"
      >
        <span className="mb-1 block text-sm">Notes</span>
        <textarea
          name="notes"
          id="notes"
          className="w-full flex-grow rounded-md p-2 text-lg text-dark"
        />
      </label>

      <Select
        label="What type of advice are you looking for?"
        name="advice"
        options={['I', 'dont', 'know', 'what', 'goes', 'here']}
        className="md:col-span-2"
      />

      <div className="col-span-full mt-8 text-center">
        <button
          type="submit"
          className="rounded-full bg-beige px-10 py-2 uppercase text-purple-steady transition-shadow hover:shadow-lg"
        >
          Submit
        </button>
      </div>
    </form>
  )
}
