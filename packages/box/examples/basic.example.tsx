import * as React from "react"
import { storiesOf } from "@storybook/react"

import Box from "./../src/index"

const stories = storiesOf("Components/Box", module)

stories.add("Basic", () => (
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
              backgroundPosition="bottom"
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
                    <Box display="flex" alignItems="center">
                      <Box display="inline-flex" marginX="-px">
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                      </Box>
                      <Box
                        fontSize="sm"
                        fontSizeMd="base"
                        marginLeft="2"
                        marginTop="1"
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
))

function Star() {
  return (
    <Box
      as="svg"
      width="4"
      height="4"
      marginX="px"
      fill="current"
      textColor="green-600"
      viewBox="0 0 14 14"
    >
      <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
    </Box>
  )
}
