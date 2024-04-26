import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader, Divider, Image } from '@nextui-org/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
      <Card className='m-2 col-span-2'>
        <CardHeader className='flex gap-3'>
          <Image
            alt='nextui logo'
            height={40}
            radius='sm'
            src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
            width={40}
          />
          <div className='flex flex-col'>
            <p className='text-md'>NextUI</p>
            <p className='text-small text-default-500'>nextui.org</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link
            isExternal
            showAnchorIcon
            href='https://github.com/nextui-org/nextui'
          >
            Visit source code on GitHub.
          </Link>
        </CardFooter>
      </Card>

      <div className='m-2 col-span-2'>
        <Card className='py-4'>
          <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
            <p className='text-tiny uppercase font-bold'>Daily Mix</p>
            <small className='text-default-500'>12 Tracks</small>
            <h4 className='font-bold text-large'>Frontend Radio</h4>
          </CardHeader>
          <CardBody className='overflow-visible py-2'>
            <Image
              alt='Card background'
              className='object-cover rounded-xl'
              src='/images/hero-card-complete.jpeg'
              width={270}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
