const compromise = require('compromise');

const analyzeText = async (text) => {
    let doc = compromise(text);
    let keywords = doc.topics().out('array');

    if (keywords.includes('cleanliness') || keywords.includes('dirty')) {
        return 'cleanliness';
    } else if (keywords.includes('damage') || keywords.includes('broken')) {
        return 'technical';
    } else if (keywords.includes('staff') || keywords.includes('rude')) {
        return 'staff behavior';
    } else if (keywords.includes('safety') || keywords.includes('security')) {
        return 'security';
    } else {
        return 'general';
    }
};

module.exports = { analyzeText };