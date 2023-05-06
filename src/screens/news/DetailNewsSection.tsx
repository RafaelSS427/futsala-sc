import { Box, Typography } from '@mui/material'
import { AvatarApp, SectionTitle } from '@/components'

export const DetailNewsSection = () => {
  return (
    <Box component="section">
        <AvatarApp fullName="Rafael Sequeira" date="22/04/2023 17:02" photoUrl="/avatar-development-mode.jpg" />
        <Box my={3}>
            <Typography sx={{ color:"#666" }} variant="body1" component="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum corporis officia, delectus quia quidem velit et ex consequuntur impedit sunt illo quod maxime illum rem accusantium doloremque sint cum nihil.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident eligendi et aperiam saepe aut, quo adipisci totam recusandae? Veniam, nam iusto laboriosam ipsam magni itaque commodi rerum non vel eum?
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quis officiis eaque, omnis dicta exercitationem sit enim beatae necessitatibus inventore accusantium nesciunt tempore ipsum qui sed temporibus! Similique, sequi harum!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias iusto vero ad explicabo ipsa quas, quia corporis ratione eaque atque magni modi, voluptatum commodi temporibus laborum blanditiis nostrum laudantium illo?
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quis officiis eaque, omnis dicta exercitationem sit enim beatae necessitatibus inventore accusantium nesciunt tempore ipsum qui sed temporibus! Similique, sequi harum!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias iusto vero ad explicabo ipsa quas, quia corporis ratione eaque atque magni modi, voluptatum commodi temporibus laborum blanditiis nostrum laudantium illo?
                <br />
                <br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quis officiis eaque, omnis dicta exercitationem sit enim beatae necessitatibus inventore accusantium nesciunt tempore ipsum qui sed temporibus! Similique, sequi harum!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias iusto vero ad explicabo ipsa quas, quia corporis ratione eaque atque magni modi, voluptatum commodi temporibus laborum blanditiis nostrum laudantium illo?
            </Typography>
        </Box>
    </Box>
  )
}