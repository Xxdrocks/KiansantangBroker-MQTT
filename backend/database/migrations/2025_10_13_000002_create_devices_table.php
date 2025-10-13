public function up(): void
{
    Schema::create('devices', function (Blueprint $table) {
        $table->id();
        $table->foreignId('user_id')->constrained()->onDelete('cascade');
        $table->string('name');
        $table->string('sensor')->default('Carbon');
        $table->boolean('status')->default(true);
        $table->float('daily')->default(0);
        $table->float('weekly')->default(0);
        $table->float('monthly')->default(0);
        $table->float('yearly')->default(0);
        $table->string('city')->nullable();
        $table->decimal('lat', 10, 7)->nullable();
        $table->decimal('lng', 10, 7)->nullable();
        $table->timestamps();
    });
}
