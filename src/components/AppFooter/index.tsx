import {
  ActionIcon,
  ActionIconProps,
  Anchor,
  Button,
  Container,
  createStyles,
  Divider,
  Flex,
  rem,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
  IconClock,
  IconMap2,
} from "@tabler/icons-react";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  container: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.dark[8],
    fontSize: theme.fontSizes.md,
    paddingTop: rem(4),
    paddingBottom: rem(4),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

export default function AppFooter({ data }: FooterLinksProps) {
  const { classes } = useStyles();
  const smallerThan = useMediaQuery("(max-width: 600px)");

  const actionIconProps: ActionIconProps = {
    size: "xl",
    variant: "filled",
    radius: "xl",
    color: "violet",
  };

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container fluid className={classes.container}>
        <Flex
          align="center"
          justify="space-between"
          direction={{ base: "column", sm: "row" }}
        >
          <Stack spacing="sm">
            <Title order={2} align={smallerThan ? "center" : "start"}>
              Connect with us
            </Title>
            <Flex gap="sm">
              <ActionIcon title="facebook" {...actionIconProps}>
                <IconBrandFacebook />
              </ActionIcon>
              <ActionIcon title="twitter" {...actionIconProps}>
                <IconBrandTwitter />
              </ActionIcon>
              <ActionIcon title="instagram" {...actionIconProps}>
                <IconBrandInstagram />
              </ActionIcon>
              <ActionIcon title="youtube" {...actionIconProps}>
                <IconBrandYoutube />
              </ActionIcon>
              <ActionIcon title="linkedin" {...actionIconProps}>
                <IconBrandLinkedin />
              </ActionIcon>
            </Flex>
          </Stack>
          <Stack spacing="sm" mt={smallerThan ? "md" : 0}>
            <Text size="lg">
              Enter your email address to receive our newsletter
            </Text>
            <Flex gap="xs">
              <TextInput size="md" sx={{ flexGrow: 1 }} />
              <Button size="md" variant="filled">
                Signup
              </Button>
            </Flex>
          </Stack>
        </Flex>
      </Container>
      <Divider />
      <Container fluid className={classes.container}>
        <SimpleGrid
          cols={4}
          breakpoints={[
            { maxWidth: "md", cols: 3, spacing: "md" },
            { maxWidth: "sm", cols: 2, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          <Stack>
            <Stack spacing="xs">
              <Flex gap="md" align="center">
                <IconMap2 size={36} />
                <Text size="lg" weight={500}>
                  Where You Visit
                </Text>
              </Flex>
              <Text>ABC 123 Street, Highway Drive</Text>
              <Text>Nairobi, XYZ Building</Text>
              <Text>+254 000 000 000</Text>
            </Stack>
            <Stack spacing="xs">
              <Flex gap="md" align="center">
                <IconClock size={36} />
                <Text size="lg" weight={500}>
                  Opening Times
                </Text>
              </Flex>
              <Text>From January 1</Text>
              <Text>Monday - Friday : 10.00–17.00</Text>
            </Stack>
          </Stack>
          {groups}
        </SimpleGrid>
      </Container>
      <Divider />
      <Container fluid className={classes.container}>
        <Flex
          justify="space-between"
          align="center"
          direction={{ base: "column", sm: "row" }}
          gap={{ base: "sm", sm: "lg" }}
        >
          <Flex gap="sm" justify="center" align="center">
            <Anchor>Privacy Policy</Anchor>
            <Anchor>Cookies</Anchor>
            <Anchor>Terms of Use</Anchor>
          </Flex>
          <Text>
            &copy;{new Date().getFullYear()}&nbsp;Art & History Museum
          </Text>
          <Flex justify="center" align="center" gap="xs">
            <Text>Site created by:&nbsp;</Text>
            <Anchor
              component="a"
              target="_blank"
              href="https://github.com/kelvink96"
              variant="subtle"
            >
              Kelvin
            </Anchor>
          </Flex>
        </Flex>
      </Container>
    </footer>
  );
}
