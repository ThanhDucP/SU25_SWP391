import { Box, Flex, Heading, Text, VStack, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

const Footer: React.FC = () => {
    const exploreLinks = [
        { title: 'Trang chủ', link: '/' },
        { title: 'Hiến máu', link: '/donor' },
        { title: 'Yêu cầu máu', link: '/blood-request' },
        { title: 'Tổ chức hiến máu', link: '/host-blood-drive' },
        { title: 'Liên hệ', link: '/contact' },
        { title: 'Dashboard Quản trị', link: '/dashboard' },
    ];

    const contactLinks = [
        { title: '(+84)-123-456-7890', link: 'tel:+841234567890', ariaLabel: 'Gọi số điện thoại' },
        { title: 'help@hemocell.vn', link: 'mailto:blood-contact@gmail.com', ariaLabel: 'Gửi email' },
        { title: 'Hà Nội, Việt Nam', link: 'https://goo.gl/maps/xyz', ariaLabel: 'Xem bản đồ' },
        { title: 'Mở cửa 24/7', link: '/contact', ariaLabel: 'Liên hệ để biết thêm chi tiết' },
    ];

    return (
        <Box as="footer" bg="gray.800" color="white" py={10} px={4} w="full">
            <Flex
                maxW="container.xl"
                mx="auto"
                direction={{ base: 'column', md: 'row' }}
                justify="space-between"
                gap={8}
            >
                {/* Logo và Slogan */}
                <VStack align="start" spacing={4} flex="1">
                    <Heading as="h2" size="lg">
                        Hemo<span style={{ color: '#e53e3e' }}>Cell</span>
                    </Heading>
                    <Text fontSize="md" color="gray.300">
                        Bạn không cần là bác sĩ để cứu người: Chỉ cần hiến máu.
                    </Text>
                </VStack>

                {/* Explore Links */}
                <VStack align="start" spacing={2} flex="1">
                    <Heading as="h3" size="sm" color="red.400" textTransform="uppercase" letterSpacing="widest">
                        Khám phá
                    </Heading>
                    <VStack align="start" spacing={1}>
                        {exploreLinks.map((link, index) => (
                            <ChakraLink
                                key={index}
                                as={Link}
                                href={link.link}
                                fontSize="md"
                                color="gray.300"
                                _hover={{ color: 'white', textDecoration: 'underline' }}
                                aria-label={link.title}
                            >
                                {link.title}
                            </ChakraLink>
                        ))}
                    </VStack>
                </VStack>

                {/* Contact Links */}
                <VStack align="start" spacing={2} flex="1">
                    <Heading as="h3" size="sm" color="red.400" textTransform="uppercase" letterSpacing="widest">
                        Liên hệ
                    </Heading>
                    <VStack align="start" spacing={1}>
                        {contactLinks.map((link, index) => (
                            <ChakraLink
                                key={index}
                                as={Link}
                                href={link.link}
                                fontSize="md"
                                color="gray.300"
                                _hover={{ color: 'white', textDecoration: 'underline' }}
                                aria-label={link.ariaLabel}
                            >
                                {link.title}
                            </ChakraLink>
                        ))}
                    </VStack>
                </VStack>
            </Flex>

            {/* Copyright */}
            <Box
                borderTop="1px"
                borderColor="whiteAlpha.200"
                mt={8}
                pt={6}
                textAlign="center"
            >
                <Text fontSize="sm" color="gray.300">
                    © 2025 ABC - Thiết kế bởi{' '}
                    <ChakraLink
                        href=""
                        isExternal
                        textDecoration="underline"
                        _hover={{ color: 'white' }}
                        aria-label="Trang Project Của Nhóm Sinh Viên Trường 3 Chữ !"
                    >

                    </ChakraLink>
                </Text>
            </Box>
        </Box>
    );
};

export default Footer;