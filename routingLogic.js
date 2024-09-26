const routeComplaint = (category) => {
    switch (category) {
        case 'cleanliness':
            return 'Maintenance Department';
        case 'technical':
            return 'Engineering Department';
        case 'staff behavior':
            return 'HR Department';
        case 'security':
            return 'Security Department';
        default:
            return 'General Complaints Department';
    }
};

module.exports = { routeComplaint };