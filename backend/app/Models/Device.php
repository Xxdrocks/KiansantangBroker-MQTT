class Device extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','name','sensor','status','daily','weekly','monthly','yearly','city','lat','lng'];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
