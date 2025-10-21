import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Phone, Navigation, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const nearbyHospitals = [
  {
    id: 1,
    name: "St. Mary's Medical Center",
    address: "123 Healthcare Ave, Medical District",
    phone: "+1 (555) 111-2222",
    distance: "1.2 miles",
    emergency: true,
    coordinates: [51.505, -0.09] as [number, number]
  },
  {
    id: 2,
    name: "Central Emergency Hospital",
    address: "456 Emergency Blvd, Downtown",
    phone: "+1 (555) 222-3333",
    distance: "2.5 miles",
    emergency: true,
    coordinates: [51.51, -0.1] as [number, number]
  },
  {
    id: 3,
    name: "Riverside General Hospital",
    address: "789 River Road, Eastside",
    phone: "+1 (555) 333-4444",
    distance: "3.8 miles",
    emergency: true,
    coordinates: [51.515, -0.08] as [number, number]
  },
  {
    id: 4,
    name: "Memorial Care Clinic",
    address: "321 Health Street, Westside",
    phone: "+1 (555) 444-5555",
    distance: "4.2 miles",
    emergency: false,
    coordinates: [51.495, -0.095] as [number, number]
  }
];

const Hospitals = () => {
  const [userLocation, setUserLocation] = useState<[number, number]>([51.505, -0.09]);

  useEffect(() => {
    // Try to get user's actual location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        () => {
          console.log("Using default location");
        }
      );
    }
  }, []);

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  const handleDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Nearby Hospitals</h1>
          <p className="text-muted-foreground">Find the nearest medical facilities</p>
        </div>

        <Card className="mb-8 overflow-hidden">
          <div className="h-[400px] w-full">
            <MapContainer
              center={userLocation}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {nearbyHospitals.map((hospital) => {
                return (
                  <Marker key={hospital.id} position={hospital.coordinates}>
                    <Popup>
                      <div className="p-2">
                        <h3 className="font-bold">{hospital.name}</h3>
                        <p className="text-sm">{hospital.address}</p>
                        <p className="text-sm font-medium mt-1">{hospital.distance} away</p>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nearbyHospitals.map((hospital) => (
            <Card key={hospital.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-1">{hospital.name}</CardTitle>
                    {hospital.emergency && (
                      <span className="inline-block px-2 py-1 text-xs font-semibold bg-primary text-primary-foreground rounded">
                        24/7 Emergency
                      </span>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-primary">{hospital.distance}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Address</p>
                  <p className="text-sm">{hospital.address}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="text-sm font-medium">{hospital.phone}</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    onClick={() => handleCall(hospital.phone)}
                    className="flex-1 gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </Button>
                  <Button
                    onClick={() => handleDirections(hospital.address)}
                    variant="outline"
                    className="flex-1 gap-2"
                  >
                    <Navigation className="h-4 w-4" />
                    Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
