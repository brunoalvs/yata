import {
  Button,
  Center,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Center
        h='100vh'
        color='white'
        bgGradient='linear(to-br, teal.800, brand.900)'
        backdropBlur='base'
      >
        <h1>Hello</h1>
        <Popover>
          <PopoverTrigger>
            <Button colorScheme='blackAlpha'>Trigger</Button>
          </PopoverTrigger>
          <PopoverContent
            bgColor='blackAlpha.600'
            borderColor='transparent'
          >
            <PopoverArrow
              bgColor='blackAlpha.300'
              borderColor='transparent'
            />
            <PopoverCloseButton />
            <PopoverHeader>Confirmation!</PopoverHeader>
            <PopoverBody>
              Are you sure you want to have that milkshake?
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Center>
    </>
  )
}
