import { Button } from "@/components/ui/button";

export default function Resume() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-inter font-bold text-foreground">Resume</h1>
        <p className="text-muted-foreground mt-1">Upload and manage your resume</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <div className="space-y-6">
          {/* Current Resume */}
          <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
            <h3 className="text-lg font-inter font-semibold text-foreground mb-4">Current Resume</h3>
            
            <div className="bg-gradient-to-br from-lavender/10 to-sky/10 rounded-xl p-6 border-2 border-dashed border-lavender/30">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-lavender rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">📄</span>
                </div>
                <div>
                  <p className="font-inter font-medium text-foreground">Alex_Chen_Resume_2024.pdf</p>
                  <p className="text-sm text-muted-foreground">Uploaded 2 days ago • 245 KB</p>
                </div>
                <div className="flex justify-center space-x-3">
                  <Button variant="outline" size="sm" className="rounded-xl">
                    Download
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-xl">
                    Preview
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Upload New */}
          <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
            <h3 className="text-lg font-inter font-semibold text-foreground mb-4">Upload New Resume</h3>
            
            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-xl">📁</span>
                </div>
                <div>
                  <p className="font-inter font-medium text-foreground">Drag and drop your resume here</p>
                  <p className="text-sm text-muted-foreground">or click to browse files</p>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                  Choose File
                </Button>
                <p className="text-xs text-muted-foreground">PDF files only, max 5MB</p>
              </div>
            </div>
          </div>

          {/* AI Scan */}
          <div className="bg-gradient-to-br from-mint/20 to-sky/20 rounded-2xl p-6 border border-mint/30">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h3 className="text-lg font-inter font-semibold text-foreground">AI Resume Scanner</h3>
                <p className="text-sm text-muted-foreground">Get personalized improvements and ATS optimization</p>
              </div>
              <Button className="bg-mint text-mint-foreground hover:bg-mint/90 rounded-xl">
                🤖 Scan & Improve
              </Button>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="space-y-6">
          <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50 h-96">
            <h3 className="text-lg font-inter font-semibold text-foreground mb-4">Resume Preview</h3>
            
            <div className="bg-muted rounded-xl h-full flex items-center justify-center">
              <div className="text-center space-y-2">
                <span className="text-4xl">📄</span>
                <p className="font-inter font-medium text-muted-foreground">Resume preview will appear here</p>
                <p className="text-sm text-muted-foreground">Upload a resume to see the preview</p>
              </div>
            </div>
          </div>

          {/* Resume Tips */}
          <div className="bg-lavender/10 rounded-2xl p-6 border border-lavender/30">
            <h3 className="text-lg font-inter font-semibold text-foreground mb-4">💡 Resume Tips</h3>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex items-start space-x-2">
                <span className="text-mint-foreground">•</span>
                <span>Use action verbs and quantify your achievements</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-sky-foreground">•</span>
                <span>Keep it to 1-2 pages maximum</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-lavender-foreground">•</span>
                <span>Tailor your resume for each application</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-mint-foreground">•</span>
                <span>Use keywords from the job description</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}