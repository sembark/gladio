import * as React from "react"
import { Story, Meta } from "@storybook/react"

import Box from "./../src/index"
import Icons from "./../../icons/src"

export default {
  title: "Components/Box",
  component: Box,
  argTypes: {},
} as Meta

const Template: Story<React.ComponentProps<typeof Box>> = (args) => (
  <Box {...args} />
)

export const BaseBox = Template.bind({})
BaseBox.args = {
  children: "Box Content",
}

export function PackagePreview() {
  return (
    <Box paddingY="5" backgroundColor="gray-200">
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box paddingX="2" maxWidth="md" maxWidthMd="2xl">
          <Box
            boxShadow="lg"
            rounded="lg"
            backgroundColor="white"
            overflow="hidden"
          >
            <Box displayMd="flex">
              <Box
                border
                backgroundSize="cover"
                backgroundPosition="center"
                height="56"
                widthMd="56"
                heightMd="auto"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80)",
                }}
              />
              <Box>
                <Box padding="4" paddingMd="5">
                  <Box as="p" fontWeight="bold" fontSize="xl" fontSizeMd="2xl">
                    Amsterdam Walking Tour
                  </Box>
                  <Box as="p" textColor="gray-700" fontSizeMd="lg">
                    Explore popular tourist destinations as well as hidden local
                    favourites.
                  </Box>
                </Box>
                <Box padding="4" paddingMd="5" backgroundColor="gray-100">
                  <Box
                    displaySm="flex"
                    justifyContentSm="between"
                    alignItemsSm="center"
                  >
                    <Box>
                      <Box fontSize="lg" textColor="gray-700">
                        <Box as="span" textColor="gray-900" fontWeight="bold">
                          17
                        </Box>{" "}
                        person*
                      </Box>
                      <Box display="flex" alignItems="center" fontSize="sm">
                        <Box
                          display="inline-flex"
                          marginX="-px"
                          textColor="green-600"
                        >
                          <Icons.Star />
                          <Icons.Star />
                          <Icons.Star />
                          <Icons.Star />
                          <Icons.Star />
                        </Box>
                        <Box
                          fontSize="sm"
                          fontSizeMd="base"
                          marginLeft="2"
                          textColor="gray-600"
                        >
                          28 reviews
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      as="button"
                      marginTop="3"
                      marginTopSm="0"
                      paddingY="2"
                      paddingX="5"
                      paddingYMd="3"
                      paddingXMd="6"
                      backgroundColor="primary-700"
                      backgroundColorHover="primary-600"
                      fontWeight="bold"
                      textColor="white"
                      fontSizeMd="lg"
                      rounded="lg"
                      boxShadow="md"
                      outline="none"
                      outlineFocus="none"
                    >
                      Book Now
                    </Box>
                  </Box>
                  <Box
                    marginTop="3"
                    textColor="gray-600"
                    fontSize="sm"
                    fontSizeMd="base"
                  >
                    *Prices may vary depending on selected date.
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export function Alert() {
  return (
    <Box padding="4" maxWidth="3xl" marginX="auto">
      <Box
        backgroundColor="red-100"
        border
        borderColor="red-400"
        textColor="red-700"
        paddingX="4"
        paddingY="3"
        rounded
        position="relative"
        role="alert"
        type="assertive"
        display="flex"
      >
        <Box as="span" marginRight="3">
          <Icons.Cancel role="button" title="Close" />
        </Box>
        <Box>
          <Box as="strong" fontWeight="bold">
            Holy smokes!
          </Box>{" "}
          <Box as="span" display="block" displaySm="inline">
            Something seriously bad happened.
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export function Button() {
  return (
    <Box padding="4" textAlign="center">
      <Box
        as="button"
        backgroundColor="gray-300"
        backgroundColorHover="gray-400"
        textColor="gray-800"
        fontWeight="bold"
        paddingY="2"
        paddingX="4"
        rounded="lg"
        display="inline-flex"
        alignItems="center"
      >
        <Box as="span" marginRight="2">
          <Icons.DocumentDownload />
        </Box>
        <Box as="span">Download</Box>
      </Box>
    </Box>
  )
}

export function NavitationHeader() {
  return (
    <Box padding="4" maxWidth="4xl" marginX="auto">
      <Box
        as="nav"
        display="flex"
        alignItems="center"
        justifyContent="between"
        padding="6"
        backgroundColor="primary-500"
        flexWrap="wrap"
      >
        <Box
          display="flex"
          alignItems="center"
          flexShrink="0"
          textColor="white"
          marginRight="6"
        >
          <Box
            as="span"
            fontWeight="semibold"
            fontSize="lg"
            letterSpacing="tight"
          >
            Shapes
          </Box>
        </Box>
        <Box display="block" displayLg="hidden">
          <Box
            as="button"
            display="flex"
            alignItems="center"
            paddingX="3"
            paddingY="2"
            border
            rounded
            textColor="primary-200"
            borderColor="primary-400"
            textColorHover="white"
            borderColorHover="white"
          >
            <Icons.DotsVertical />
          </Box>
        </Box>
        <Box
          width="full"
          display="block"
          flexGrow="default"
          displayLg="flex"
          alignItemsLg="center"
          widthLg="auto"
        >
          <Box fontSize="sm" flexGrowLg="default">
            <Box
              as="a"
              href="#responsive-header"
              display="block"
              marginTop="4"
              displayLg="inline-block"
              marginTopLg="0"
              textColor="primary-200"
              textColorHover="white"
              marginRight="4"
            >
              Docs
            </Box>
            <Box
              as="a"
              href="#responsive-header"
              display="block"
              marginTop="4"
              displayLg="inline-block"
              marginTopLg="0"
              textColor="primary-200"
              textColorHover="white"
              marginRight="4"
            >
              Examples
            </Box>
            <Box
              as="a"
              href="#responsive-header"
              display="block"
              marginTop="4"
              displayLg="inline-block"
              marginTopLg="0"
              textColor="primary-200"
              textColorHover="white"
            >
              Blog
            </Box>
          </Box>
          <Box>
            <Box
              as="a"
              href="#"
              display="inline-block"
              fontSize="sm"
              paddingX="4"
              paddingY="2"
              lineHeight="none"
              border
              rounded
              textColor="white"
              borderColor="white"
              borderColorHover="transparent"
              textColorHover="primary-500"
              backgroundColorHover="white"
              marginTop="4"
              marginTopLg="0"
            >
              Download
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export function Forms() {
  return (
    <Box as="form" width="full" maxWidth="lg" marginX="auto">
      <Box display="flex" flexWrap="wrap" marginX="-3" marginBottom="6">
        <Box
          width="full"
          widthMd="1/2"
          paddingX="3"
          marginBottom="6"
          marginBottomMd="0"
        >
          <Box
            as="label"
            display="block"
            textTransform="uppercase"
            letterSpacing="wide"
            textColor="gray-700"
            fontSize="xs"
            fontWeight="bold"
            marginBottom="2"
            htmlFor="grid-first-name"
          >
            First Name
          </Box>
          <Box
            as="input"
            display="block"
            width="full"
            backgroundColor="gray-200"
            textColor="gray-700"
            border
            borderColor="red-500"
            rounded
            paddingY="3"
            paddingX="4"
            marginBottom="3"
            lineHeight="tight"
            outlineFocus="none"
            backgroundColorFocus="white"
            appearance="none"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          <Box as="p" textColor="red-500" fontSize="xs" fontStyle="italic">
            Please fill out this field.
          </Box>
        </Box>
        <Box width="full" widthMd="1/2" paddingX="3">
          <Box
            as="label"
            display="block"
            textTransform="uppercase"
            letterSpacing="wide"
            textColor="gray-700"
            fontSize="xs"
            fontWeight="bold"
            marginBottom="2"
            htmlFor="grid-last-name"
          >
            Last Name
          </Box>
          <Box
            as="input"
            appearance="none"
            display="block"
            width="full"
            backgroundColor="gray-200"
            textColor="gray-700"
            border
            borderColor="gray-200"
            rounded
            paddingY="3"
            paddingX="4"
            lineHeight="tight"
            outlineFocus="none"
            backgroundColorFocus="white"
            borderColorFocus="gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </Box>
      </Box>
      <Box display="flex" flexWrap="wrap" marginX="-3" marginBottom="6">
        <Box width="full" paddingX="3">
          <Box
            as="label"
            display="block"
            textTransform="uppercase"
            letterSpacing="wide"
            textColor="gray-700"
            fontSize="xs"
            fontWeight="bold"
            marginBottom="2"
            htmlFor="grid-password"
          >
            Password
          </Box>
          <Box
            as="input"
            appearance="none"
            display="block"
            width="full"
            backgroundColor="gray-200"
            textColor="gray-700"
            border
            borderColor="gray-200"
            rounded
            paddingY="3"
            paddingX="4"
            marginBottom="3"
            lineHeight="tight"
            outlineFocus="none"
            backgroundColorFocus="white"
            borderColorFocus="gray-500"
            id="grid-password"
            type="password"
            placeholder="******************"
          />
          <Box as="p" textColor="gray-700" fontSize="xs">
            Make it as long and as crazy as you'd like
          </Box>
        </Box>
      </Box>
      <Box display="flex" flexWrap="wrap" marginX="-3" marginBottom="2">
        <Box width="full" widthMd="1/3" marginBottom="6" marginBottomMd="0">
          <Box
            as="label"
            display="block"
            textTransform="uppercase"
            letterSpacing="wide"
            textColor="gray-700"
            fontSize="xs"
            fontWeight="bold"
            marginBottom="2"
            htmlFor="grid-city"
          >
            City
          </Box>
          <Box
            as="input"
            appearance="none"
            display="block"
            width="full"
            backgroundColor="gray-200"
            textColor="gray-700"
            border
            borderColor="gray-200"
            rounded
            paddingY="3"
            paddingX="4"
            marginBottom="3"
            lineHeight="tight"
            outlineFocus="none"
            backgroundColorFocus="white"
            borderColorFocus="gray-500"
            id="grid-city"
            type="text"
            placeholder="Albuquerque"
          />
        </Box>
        <Box
          width="full"
          widthMd="1/3"
          paddingX="3"
          marginBottom="6"
          marginBottomMd="0"
        >
          <Box
            as="label"
            display="block"
            textTransform="uppercase"
            letterSpacing="wide"
            textColor="gray-700"
            fontSize="xs"
            fontWeight="bold"
            marginBottom="2"
            htmlFor="grid-state"
          >
            State
          </Box>
          <Box position="relative">
            <Box
              as="select"
              appearance="none"
              display="block"
              width="full"
              backgroundColor="gray-200"
              textColor="gray-700"
              border
              borderColor="gray-200"
              rounded
              paddingY="3"
              paddingX="4"
              paddingRight="8"
              marginBottom="3"
              lineHeight="tight"
              outlineFocus="none"
              backgroundColorFocus="white"
              borderColorFocus="gray-500"
              id="grid-state"
            >
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </Box>
            <Box
              position="absolute"
              insetY="0"
              right="0"
              display="flex"
              alignItems="center"
              paddingX="2"
              textColor="gray-700"
              pointerEvents="none"
            >
              <Icons.ChevronDown />
            </Box>
          </Box>
        </Box>
        <Box
          width="full"
          widthMd="1/3"
          paddingX="3"
          marginBottom="6"
          marginBottomMd="0"
        >
          <Box
            as="label"
            display="block"
            textTransform="uppercase"
            letterSpacing="wide"
            textColor="gray-700"
            fontSize="xs"
            fontWeight="bold"
            marginBottom="2"
            htmlFor="grid-zip"
          >
            Zip
          </Box>
          <Box
            as="input"
            appearance="none"
            display="block"
            width="full"
            backgroundColor="gray-200"
            textColor="gray-700"
            border
            borderColor="gray-200"
            rounded
            paddingY="3"
            paddingX="4"
            marginBottom="3"
            lineHeight="tight"
            outlineFocus="none"
            backgroundColorFocus="white"
            borderColorFocus="gray-500"
            id="grid-zip"
            type="text"
            placeholder="90210"
          />
        </Box>
      </Box>
    </Box>
  )
}

export function StackedCard() {
  return (
    <Box maxWidth="sm" marginX="auto" rounded overflow="hidden" boxShadow="lg">
      <Box
        as="img"
        width="full"
        src="https://images.unsplash.com/photo-1460891053196-b9d4d9483d9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=215&q=80"
        alt="Sunset in the mountains"
      />
      <Box paddingX="6" paddingY="4">
        <Box fontWeight="bold" fontSize="xl" marginBottom="2">
          The Coldest Sunset
        </Box>
        <Box as="p" textColor="gray-700" fontSize="base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </Box>
      </Box>
      <Box paddingX="6" paddingY="4">
        <Box
          as="span"
          display="inline-block"
          backgroundColor="gray-200"
          rounded="full"
          paddingX="3"
          paddingY="1"
          fontSize="sm"
          fontWeight="semibold"
          textColor="gray-700"
          marginRight="2"
        >
          #photography
        </Box>
        <Box
          as="span"
          display="inline-block"
          backgroundColor="gray-200"
          rounded="full"
          paddingX="3"
          paddingY="1"
          fontSize="sm"
          fontWeight="semibold"
          textColor="gray-700"
          marginRight="2"
        >
          #travel
        </Box>
        <Box
          as="span"
          display="inline-block"
          backgroundColor="gray-200"
          rounded="full"
          paddingX="3"
          paddingY="1"
          fontSize="sm"
          fontWeight="semibold"
          textColor="gray-700"
        >
          #winter
        </Box>
      </Box>
    </Box>
  )
}
