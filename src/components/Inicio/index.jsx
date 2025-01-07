import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Link } from 'react-router'
import { useState } from 'react'

const Inicio = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [estimatedCost, setEstimatedCost] = useState('');
    const [continent, setContinent] = useState('');
    const [duration, setDuration] = useState('');
    const [myTravels, setMyTravels] = useState([]);
    const apiKey = '9-LxbbCuXio9tyt4agBFBMQ8nSfOgduvfv7Jgs_qAKo';

    const addTrip = async () => {
        if (country == '' || city == '' || estimatedCost == '' || continent == '' || duration == '') {
            alert('voce precisa preencher os campos')
        }
        try {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${city}&client_id=${apiKey}`);
            const data = await response.json();

            const imageURL = data.results[0]?.urls?.small || "Image not found";

            const storedTravels = JSON.parse(localStorage.getItem('myTravels')) || [];

            const newTravel = {
                imageURL: imageURL,
                city: city,
                country: country,
                estimatedCost: estimatedCost,
                continent: continent,
                duration: duration,
            }

            const updatedTravels = [...storedTravels, newTravel]

            setMyTravels(updatedTravels)

            localStorage.setItem('myTravels', JSON.stringify(updatedTravels))

            setCity('');
            setCountry('');
            setEstimatedCost('');
            setContinent('');
            setDuration('');

            Toastify({
                text: "Trip added successfully",
                duration: 1500,
                gravity: "bottom",
                position: "center",
                stopOnFocus: true,
                style: {
                  background: "#171717",
                  color: "#f3f3f3",
                  width: "100%",
                },
              }).showToast();

            console.log("Viagem adicionada com sucesso", newTravel);
        } catch (error) {
            console.error("Erro ao buscar imagem:", error);
        }
    }

    return (
        <>
            <main className='flex flex-col items-center justify-center px-4 pb-4'>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Add your new trip
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <form className='flex flex-col gap-3' onSubmit={(e) => {
                            e.preventDefault();
                            addTrip();
                        }}>
                            <div>
                                <Label htmlFor='city'>City</Label>
                                <Input id='city' value={city} onChange={change => setCity(change.target.value)} placeholder='City you go to' className='placeholder:text-sm' />
                            </div>
                            <div>
                                <Label htmlFor='country'>Country</Label>
                                <Input id='country' value={country} onChange={change => setCountry(change.target.value)} placeholder='Country you go to' className='placeholder:text-sm' />
                            </div>
                            <div>
                                <Label htmlFor='cost'>Estimated cost</Label>
                                <Input id='cost' value={estimatedCost} onChange={change => setEstimatedCost(change.target.value)} placeholder='Estimated cost of your trip' className='placeholder:text-sm' type='number' />
                            </div>

                            <div>
                                <Label htmlFor='continent'>Continent</Label>

                                <Select id='continent' value={continent || undefined} onValueChange={value => setContinent(value)}>
                                    <SelectTrigger>
                                        <SelectValue placeholder='Select a continent'>
                                            {continent || "Select a continent"}
                                        </SelectValue>
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectItem value='North America'>North america</SelectItem>

                                        <SelectItem value='Central America'>Central america</SelectItem>

                                        <SelectItem value='South America'>South America</SelectItem>

                                        <SelectItem value='Europe'>Europe</SelectItem>

                                        <SelectItem value='Asia'>Asia</SelectItem>

                                        <SelectItem value='Africa'>Africa</SelectItem>

                                        <SelectItem value='Oceania'>Oceania</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label htmlFor='duration'>Duration (days)</Label>
                                <Input id='duration' type='number' className='placeholder:text-sm' placeholder='Duration of your trip in days' onChange={change => setDuration(change.target.value)} value={duration} />
                            </div>

                            <Button>Add trip</Button>
                        </form>
                        <Link to={'/mytravels'}>
                            <Button variant='outline' className='mt-3 w-[276px]'>See my travels</Button>
                        </Link>
                    </CardContent>
                </Card>

            </main>
        </>
    )
}

export default Inicio