<template>
    <div class="flex flex-col min-h-screen">
        <header class="font-semibold text-2xl bg-gradient-to-r from-gray-200 to-gray-100 shadow-lg w-full main-header">
            <div class="container mx-auto px-4 py-4 flex items-center justify-between">
                <NuxtLink to="/" class=" hover:text-blue-500">
                    Recipe App
                </NuxtLink>
            </div>
        </header>
        <main class="flex-grow container mx-auto">
            <slot />
        </main>
    </div>
</template>