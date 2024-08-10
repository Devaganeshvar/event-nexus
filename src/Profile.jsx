import React from 'react';
import { Box, Avatar, Typography, Card, CardContent, IconButton } from '@mui/material';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProfilePage = () => {
    const user = {
        name: 'John Doe',
        avatar: 'https://example.com/avatar.jpg',
        bio: 'Software Developer at XYZ Corp. Passionate about web development and open-source.',
        email: 'john.doe@example.com',
        location: 'New York, USA',
        twitter: 'https://twitter.com/johndoe',
        linkedin: 'https://www.linkedin.com/in/johndoe/',
        github: 'https://github.com/johndoe'
    };

    return (
        <Box sx={{ padding: 4, backgroundColor: '#f7f7fc', borderRadius: '8px', maxWidth: '600px', margin: 'auto', mt: 4 }}>
            <Card sx={{ display: 'flex', alignItems: 'center', p: 2, position: 'relative' }}>
                <Box sx={{ flex: '0 0 auto', mr: 2 }}>
                    <Avatar
                        alt={user.name}
                        src={user.avatar}
                        sx={{ width: 80, height: 80 }}
                    />
                </Box>
                <CardContent sx={{ flex: '1 1 auto', textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                        {user.name}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, color: '#6c757d' }}>
                        {user.bio}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                        <Box sx={{ mx: 1, display: 'flex', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <Typography variant="body2" sx={{ ml: 1 }}>{user.email}</Typography>
                        </Box>
                        <Box sx={{ mx: 1, display: 'flex', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <Typography variant="body2" sx={{ ml: 1 }}>{user.location}</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                        <IconButton href={user.twitter} target="_blank">
                            <FontAwesomeIcon icon={faTwitter} />
                        </IconButton>
                        <IconButton href={user.linkedin} target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </IconButton>
                        <IconButton href={user.github} target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </IconButton>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ProfilePage;
