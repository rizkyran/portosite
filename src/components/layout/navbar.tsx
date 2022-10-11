// import React from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'

const NavLink = [
  {
    label: 'About',
    link: '/#about',
  },
  {
    label: 'Experience',
    link: '/#experience',
  },
  {
    label: 'Work',
    link: '/#work',
  },
  {
    label: 'Contact',
    link: '/#contact',
  },
]

export const Navbar = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  return (
    <Box as='section'>
      <Box
        as='nav'
        bg='bg-surface'
        boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container py={{ base: '4', lg: '5' }}>
          <HStack
            // spacing='10'
            justify='space-between'>
            <Text>Randhika</Text>
            <Spacer />
            {isDesktop ? (
              <Flex
                justify='flex-end'
                // flex='1'
              >
                <ButtonGroup
                  variant='link'
                  spacing='8'>
                  {NavLink?.map((item: any, idx: number) => (
                    <Button key={idx}>{item?.label}</Button>
                  ))}
                </ButtonGroup>
                {/* <HStack spacing='3'>
                  <Button variant='ghost'>A</Button>
                  <Button variant='primary'>B</Button>
                </HStack> */}
              </Flex>
            ) : (
              <IconButton
                variant='ghost'
                aria-label='Open Menu'
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  )
}
