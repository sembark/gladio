import Layout from "../../../components/StylesLayout"
import { theme, Box } from "@gladio/ui"

const meta = {
  title: "Color System",
  description: "Color System",
}

export function Palette({ value, shade }: { value: string; shade?: string }) {
  return (
    <Box
      display="inline-block"
      padding="3"
      textColor="gray-700"
      fontSize="sm"
      style={{ minWidth: "100px" }}
    >
      {shade ? <Box fontSize="sm">{shade}</Box> : null}
      <Box
        width="8"
        height="8"
        boxShadow
        rounded="full"
        marginY="2"
        marginRight="2"
        style={{
          backgroundColor: value,
        }}
      />
      <Box textTransform="uppercase" fontSize="sm" fontWeight="bold">
        {value}
      </Box>
    </Box>
  )
}

function groupColors(colors: typeof theme.colors) {
  return Object.keys(theme.colors).reduce<{
    [key: string]: Array<{ shade?: string; value: string }>
  }>((grouped, name) => {
    const value = colors[(name as any) as keyof typeof theme.colors]
    const parts = name.split("-")
    const [color, shade] = parts
    if (!grouped[color]) {
      grouped[color] = []
    }
    grouped[color].push({ value, shade })
    return grouped
  }, {})
}

export default function ColorPalette() {
  const colors = groupColors(theme.colors)
  return (
    <Layout meta={meta}>
      <Box>
        {Object.keys(colors).map(name => {
          const values = colors[(name as any) as keyof typeof colors]
          return (
            <Box
              key={name}
              display="inline-block"
              verticalAlign="top"
              marginBottom="2"
              paddingY="6"
              borderBottom
              style={{ minWidth: "200px" }}
            >
              <Box as="h4" textTransform="capitalize" paddingY="3">
                {name}
              </Box>
              <Box className="-m-3">
                {values.length === 1 ? (
                  <Palette value={values[0].value} shade={values[0].shade} />
                ) : (
                  values.map(({ value, shade }) => {
                    return (
                      <Palette
                        value={value}
                        key={value + shade}
                        shade={shade}
                      />
                    )
                  })
                )}
              </Box>
            </Box>
          )
        })}
      </Box>
    </Layout>
  )
}
