import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Skeleton,
  Spinner,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Toaster,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/primitives";

export default function Home() {
  return (
    <main className="min-h-screen bg-void bg-grid bg-[size:40px_40px] px-6 py-10 text-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <header className="rounded-2xl border border-edge/70 bg-surface-overlay/80 p-6 shadow-glow-soft backdrop-blur-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <Badge variant="secondary">UI System</Badge>
              <div className="space-y-2">
                <h1 className="text-4xl font-semibold tracking-tight text-neon-cyan text-glow-cyan">
                  Primitive Components Showcase
                </h1>
                <p className="max-w-2xl text-base text-muted">
                  A dark-mode gallery covering alerts, actions, inputs, dialogs,
                  navigation, and the core primitives used across the product.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button>Primary Action</Button>
              <Button variant="outline">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <CardTitle>Quick Stats</CardTitle>
                  <CardDescription>
                    System health and kiosk status
                  </CardDescription>
                </div>
                <Badge variant="default">Live</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between rounded-xl border border-edge/60 bg-surface-raised/40 p-3">
                <span className="text-muted">Transfer queue</span>
                <span className="font-medium text-neon-cyan">128 jobs</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-edge/60 bg-surface-raised/40 p-3">
                <span className="text-muted">Sync stability</span>
                <span className="font-medium text-neon-lime">98.7%</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-edge/60 bg-surface-raised/40 p-3">
                <span className="text-muted">Update latency</span>
                <span className="font-medium text-neon-amber">320ms</span>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="outline" size="sm">
                Review logs
              </Button>
              <Button size="sm">Deploy</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Team Presence</CardTitle>
              <CardDescription>Currently online and active</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <AvatarGroup>
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" />
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" />
                    <AvatarFallback>JK</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>ST</AvatarFallback>
                  </Avatar>
                  <AvatarGroupCount>+5</AvatarGroupCount>
                </AvatarGroup>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Ops desk</span>
                  <span className="text-success">Online</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Edge network</span>
                  <span className="text-info">Stable</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Alert States</CardTitle>
              <CardDescription>
                System messaging and notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertTitle>Sync complete</AlertTitle>
                <AlertDescription>
                  The latest transfer batch finished successfully across all
                  nodes.
                </AlertDescription>
                <div className="mt-2 flex justify-end">
                  <Button variant="secondary" size="sm">
                    View report
                  </Button>
                </div>
              </Alert>

              <Alert variant="destructive">
                <AlertTitle>Attention required</AlertTitle>
                <AlertDescription>
                  One route is temporarily degraded and needs a manual fallback.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Forms</CardTitle>
              <CardDescription>
                Inputs, checkboxes, and selectors
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-muted">Workspace name</label>
                <Input defaultValue="opti-transfer-prod" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted">Transfer notes</label>
                <Textarea defaultValue="Enable checksum validation before finalizing the export." />
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Checkbox id="confirm" defaultChecked />
                <label htmlFor="confirm" className="text-muted">
                  Require approval before launch
                </label>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted">Primary region</label>
                <Select defaultValue="us-east">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us-east">us-east</SelectItem>
                    <SelectItem value="eu-west">eu-west</SelectItem>
                    <SelectItem value="ap-southeast">ap-southeast</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 xl:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Badges & Status</CardTitle>
              <CardDescription>Visual indicators and metadata</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Healthy</Badge>
                <Badge variant="outline">Warning</Badge>
                <Badge variant="destructive">Critical</Badge>
              </div>
              <Separator />
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted">Network layer</span>
                  <Badge variant="secondary">Stable</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Storage health</span>
                  <Badge variant="default">Nominal</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Queued retries</span>
                  <Badge variant="outline">3 pending</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Selection Controls</CardTitle>
              <CardDescription>
                Radio options and tabbed navigation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <RadioGroup defaultValue="auto" className="space-y-3">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="auto" id="auto" />
                  <label htmlFor="auto" className="text-sm text-muted">
                    Automatic routing
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="manual" id="manual" />
                  <label htmlFor="manual" className="text-sm text-muted">
                    Manual review
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="priority" id="priority" />
                  <label htmlFor="priority" className="text-sm text-muted">
                    Priority override
                  </label>
                </div>
              </RadioGroup>

              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="sync">Sync</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="overview"
                  className="mt-4 rounded-xl border border-edge/60 bg-surface-raised/40 p-4 text-sm text-muted"
                >
                  All pipelines are healthy and throughput remains within
                  target.
                </TabsContent>
                <TabsContent
                  value="activity"
                  className="mt-4 rounded-xl border border-edge/60 bg-surface-raised/40 p-4 text-sm text-muted"
                >
                  12 jobs were processed in the last hour with no critical
                  failures.
                </TabsContent>
                <TabsContent
                  value="sync"
                  className="mt-4 rounded-xl border border-edge/60 bg-surface-raised/40 p-4 text-sm text-muted"
                >
                  Source nodes are synchronized and ready for the next
                  deployment cycle.
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-6 xl:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Loading</CardTitle>
              <CardDescription>Progress and placeholders</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Spinner />
                <span className="text-sm text-muted">Refreshing cache</span>
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tooltip</CardTitle>
              <CardDescription>Inline help and actions</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center pt-6">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button variant="outline">Hover for details</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Latency is within the expected SLA window.
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dialog</CardTitle>
              <CardDescription>
                Confirmation and destructive actions
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center pt-6">
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button variant="secondary">Launch dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Confirm deployment</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action will push the selected configuration to the
                      live queue.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Deploy now</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
        </section>

        <Card>
          <CardHeader>
            <CardTitle>Pagination</CardTitle>
            <CardDescription>Multi-page navigation controls</CardDescription>
          </CardHeader>
          <CardContent>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">8</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </CardContent>
        </Card>
      </div>

      <Toaster />
    </main>
  );
}
