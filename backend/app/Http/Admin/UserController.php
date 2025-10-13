class UserController extends Controller
{
    public function index(){ return User::with('devices')->get(); }
    public function show($id){ return User::with('devices')->findOrFail($id); }
    public function store(Request $req){ 
        return User::create($req->all()); 
    }
    public function update(Request $req,$id){
        $user = User::findOrFail($id);
        $user->update($req->all());
        return $user;
    }
    public function destroy($id){
        $user = User::findOrFail($id);
        $user->delete();
        return response()->json(['message'=>'User deleted']);
    }
}
