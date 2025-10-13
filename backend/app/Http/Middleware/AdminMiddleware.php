class AdminMiddleware
{
    public function handle($request, Closure $next)
    {
        if (auth()->user() && auth()->user()->is_admin) {
            return $next($request);
        }
        return response()->json(['message'=>'Unauthorized'],403);
    }
}
