public function up(): void
{
    Schema::create('users', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('email')->unique();
        $table->string('password');
        $table->string('city')->nullable();
        $table->string('district')->nullable();
        $table->string('rt')->nullable();
        $table->string('rw')->nullable();
        $table->boolean('is_admin')->default(false);
        $table->timestamps();
    });
}
