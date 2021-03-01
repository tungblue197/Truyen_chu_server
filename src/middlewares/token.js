module.exports = {
    verify: (req, res, next) => {
        req.user = {
            id: '001',
            username: 'admin',
            fullName: 'Phạm Văn Tùng'
        }
        next(); 
    }
}