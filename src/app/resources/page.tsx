import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Resources() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">Disaster Resources</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Emergency Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Emergency Services: 911</li>
              <li>FEMA Helpline: 1-800-621-3362</li>
              <li>Red Cross: 1-800-733-2767</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Disaster Data</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li><a href="https://www.fema.gov/disasters" className="text-blue-600 hover:underline">FEMA Disaster Declarations</a></li>
              <li><a href="https://www.nhc.noaa.gov/" className="text-blue-600 hover:underline">National Hurricane Center</a></li>
              <li><a href="https://earthquake.usgs.gov/" className="text-blue-600 hover:underline">USGS Earthquake Hazards Program</a></li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recovery Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li><a href="https://www.disasterassistance.gov/" className="text-blue-600 hover:underline">DisasterAssistance.gov</a></li>
              <li><a href="https://www.redcross.org/get-help/disaster-relief-and-recovery-services.html" className="text-blue-600 hover:underline">Red Cross Disaster Relief</a></li>
              <li><a href="https://www.ready.gov/recovering-disaster" className="text-blue-600 hover:underline">Ready.gov Recovery Resources</a></li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

