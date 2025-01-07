import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { TrashIcon } from 'lucide-react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Link } from 'react-router-dom'

const Travel = () => {
    const [travels, setTravels] = useState([]);

    useEffect(() => {
        const myTravels = JSON.parse(localStorage.getItem('myTravels')) || [];
        setTravels(myTravels);
    }, [])

    const deleteTravel = (index) => {
        const storedTravels = JSON.parse(localStorage.getItem('myTravels')) || [];

        const updatedTravels = storedTravels.filter((_, i) => i !== index);

        localStorage.setItem('myTravels', JSON.stringify(updatedTravels));

        setTravels(updatedTravels);

        Toastify({
            text: "Trip deleted successfully",
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
    }

    return (
        <>
            <main className='flex flex-col gap-3 items-center justify-center p-4'>

                {travels.length === 0 ? (
                    <>
                        <h1>You don't have any travel yet.</h1>
                        <Link to={'/'}>
                            <Button>Add new travel</Button>
                        </Link>
                    </>
                ) : (
                    travels.map((travel, index) => (
                        (
                            <>
                                <Card className='w-full'>
                                    <CardHeader className='flex flex-row items-center justify-between'>
                                        <div>
                                            <CardTitle className='capitalize'>{travel.city}, {travel.country}</CardTitle>
                                            <CardDescription>{travel.continent}</CardDescription>
                                        </div>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant='destructive' className='w-10'><TrashIcon /></Button>
                                            </DialogTrigger>
                                            <DialogContent className='w-[400px] rounded-xl'>
                                                <DialogHeader>
                                                    <DialogTitle>Delete trip</DialogTitle>
                                                    <DialogDescription>Are you sure you want to delete your trip?</DialogDescription>
                                                </DialogHeader>

                                                <DialogFooter className='flex flex-row items-center justify-between w-full gap-2'>
                                                    <DialogClose asChild>
                                                        <Button className='w-full' variant='outline'>Cancel</Button>
                                                    </DialogClose>

                                                    <DialogClose asChild>
                                                        <Button onClick={() => deleteTravel(index)} className='w-full'>
                                                            Confirm
                                                        </Button>
                                                    </DialogClose>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    </CardHeader>

                                    <CardContent className='flex flex-col gap-2'>
                                        <div>
                                            <p className='text-sm font-medium'>Estimated cost: <span className='font-normal'>$ {parseFloat((travel.estimatedCost)).toFixed(2)}</span></p>

                                            <p className='text-sm font-medium'>Duration: <span className='font-normal'>{travel.duration} days</span></p>
                                        </div>

                                        <div>
                                            <img src={travel.imageURL} alt={travel.city + ', ' + travel.country} className='w-30 rounded-lg' />
                                        </div>
                                    </CardContent>
                                </Card>
                            </>
                        )
                    ))
                )}
            </main>
        </>
    )
}

export default Travel