class UserController 
{
    static showAbout(req, res) 
    {
        res.send("my name is aman");
    }
    static contactUs(req,res)
    {
        res.send("mobile no. 9891062743");
    }
}

export default UserController