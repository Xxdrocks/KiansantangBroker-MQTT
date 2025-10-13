class DeviceController extends Controller
{
    public function index(){ return Device::with('user')->get(); }
    public function show($id){ return Device::with('user')->findOrFail($id); }
    public function store(Request $req){ return Device::create($req->all()); }
    public function update(Request $req,$id){
        $device = Device::findOrFail($id);
        $device->update($req->all());
        return $device;
    }
    public function destroy($id){
        $device = Device::findOrFail($id);
        $device->delete();
        return response()->json(['message'=>'Device deleted']);
    }
}
