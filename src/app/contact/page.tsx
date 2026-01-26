import HubspotForm from './components/hubspot-form'

export default function Page() {
  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="container-main mx-auto bg-white rounded-2xl shadow-sm border border-gray-100">
        <HubspotForm />
      </div>
    </main>
  )
}