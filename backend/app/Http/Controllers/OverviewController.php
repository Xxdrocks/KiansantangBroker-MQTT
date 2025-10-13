class OverviewController extends Controller
{
    public function personal(Request $req){
        $user = $req->user();
        return response()->json($user->devices);
    }

    public function city(){
        $devices = Device::all();
        $cities = [];
        foreach($devices as $d){
            if(!isset($cities[$d->city])) $cities[$d->city] = ['daily'=>0,'weekly'=>0,'monthly'=>0,'yearly'=>0];
            $cities[$d->city]['daily'] += $d->daily;
            $cities[$d->city]['weekly'] += $d->weekly;
            $cities[$d->city]['monthly'] += $d->monthly;
            $cities[$d->city]['yearly'] += $d->yearly;
        }
        return response()->json($cities);
    }
}
