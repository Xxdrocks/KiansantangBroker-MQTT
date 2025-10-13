class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = ['name','email','password','city','district','rt','rw','is_admin'];
    protected $hidden = ['password','remember_token'];

    public function devices() {
        return $this->hasMany(Device::class);
    }
}
